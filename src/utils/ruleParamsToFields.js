/**
 * ruleParams 배열을 SFormGenerator의 fields 구조로 변환하는 유틸리티 함수
 *
 * @param {Array} ruleParams - ruleParams 배열
 * @param {Object} options - 변환 옵션
 * @param {String} options.valuePrefix - value 경로에 추가할 prefix (예: "ruleParams")
 * @param {Function} options.nameMapper - name에 따라 필드를 커스터마이징하는 함수 (name, param) => field
 * @returns {Array} fields 배열
 */
export function ruleParamsToFields(ruleParams = [], options = {}) {
  const { valuePrefix = '', nameMapper } = options

  return ruleParams
    .map(param => {
      const value = valuePrefix ? `${valuePrefix}.${param.name}` : param.name

      // nameMapper가 있으면 먼저 적용
      if (nameMapper && typeof nameMapper === 'function') {
        const customField = nameMapper(param.name, param)
        if (customField) {
          return {
            ...customField,
            value: customField.value || value,
            order: customField.order !== undefined ? customField.order : (param.order || 0),
          }
        }
      }

      // 기본 필드 생성
      const field = {
        type: param.type, // 'duration', 'integer'
        label: param.label,
        required: false, // 필요시 param에서 가져오기
        value: value,
        placeholder: param.description,
        defaultValue: param.defaultValue,
        order: param.order || 0,
      }

      // Duration 타입인 경우 units 추가
      if (param.type === 'duration' && param.units && param.units.length > 0) {
        field.units = param.units.map(unit => ({
          label: unit.label,
          value: unit.value,
          description: unit.description,
        }))
        field.unitItemTitle = 'label'
        field.unitItemValue = 'value'
        field.defaultUnitValue = param.defaultUnitValue
      }

      // 타입 변환
      if (param.type === 'integer') {
        field.type = 'number'
      }
      if (param.type === 'string') {
        field.type = 'input'
      }

      // name에 따른 추가 커스터마이징
      // 예: latency는 소수점 입력 가능하도록 설정
      if (param.name === 'latency') {
        field.type = 'number'
        // step 속성은 v-text-field에서 직접 설정 필요 (필드 설정에 추가)
        field.step = '0.1'
      }

      return field
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0)) // order로 정렬
}

/**
 * ruleParams를 fields로 변환하고 기본값을 적용하는 함수
 *
 * @param {Array} ruleParams - ruleParams 배열
 * @param {Object} initialValues - 초기값 객체
 * @param {Object} options - 변환 옵션
 * @returns {Object} { fields, initialValues }
 */
export function ruleParamsToFieldsWithDefaults(ruleParams = [], initialValues = {}, options = {}) {
  const fields = ruleParamsToFields(ruleParams, options)
  const newInitialValues = { ...initialValues }

  fields.forEach(field => {
    const valuePath = field.value.split('.')
    let current = newInitialValues

    // 중첩 객체 생성
    for (let i = 0; i < valuePath.length - 1; i++) {
      const key = valuePath[i]
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {}
      }
      current = current[key]
    }

    // 기본값 설정
    const lastKey = valuePath[valuePath.length - 1]
    if (field.type === 'duration') {
      current[lastKey] = {
        value: field.defaultValue ? Number(field.defaultValue) : undefined,
        unit: field.defaultUnitValue || (field.units && field.units[0]?.value)
      }
    } else {
      current[lastKey] = field.defaultValue !== undefined ? field.defaultValue : undefined
    }
  })

  return { fields, initialValues: newInitialValues }
}
