<template>
  <!-- Selector 필드 (fieldGroups + groupSelector 사용 시) -->
  <template v-if="finalGroupSelector">
    <s-form-item :label="finalGroupSelector.label" :required="finalGroupSelector.required">
      <vee-field v-slot="{ errors, handleChange }" :name="finalGroupSelector.value">
        <!-- finalGroupSelector.type === 'select' -->
        <v-select
          v-if="finalGroupSelector.type === 'select'"
          :model-value="getFieldValue(finalGroupSelector.value)"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :items="finalGroupSelector.options || []"
          :item-title="finalGroupSelector.itemTitle || 'title'"
          :item-value="finalGroupSelector.itemValue || 'value'"
          :placeholder="finalGroupSelector.placeholder"
          :error-messages="errors"
          @update:model-value="value => handleFieldChange(finalGroupSelector.value, value, handleChange)"
        />

        <!-- finalGroupSelector.type === 'radio' -->
        <v-radio-group
          v-else-if="finalGroupSelector.type === 'radio'"
          :model-value="getFieldValue(finalGroupSelector.value)"
          density="compact"
          hide-details="auto"
          :error-messages="errors"
          inline
          @update:model-value="value => handleFieldChange(finalGroupSelector.value, value, handleChange)"
        >
          <v-radio
            v-for="option in finalGroupSelector.options || []"
            :key="option[finalGroupSelector.itemValue || 'value']"
            :label="option[finalGroupSelector.itemTitle || 'title']"
            :value="option[finalGroupSelector.itemValue || 'value']"
            density="compact"
          />
        </v-radio-group>

        <!-- 타입이 잘못 들어온 경우 fallback -->
        <span v-else class="error-text-color">
          Unsupported groupSelector type: {{ finalGroupSelector.type }}
        </span>
      </vee-field>

      <template #outer-append>
        <!-- groupSelector용 appendText (에러는 컴포넌트 내부에서 표시) -->
        <span v-if="finalGroupSelector.appendText">
          {{ finalGroupSelector.appendText }}
        </span>
      </template>
    </s-form-item>
  </template>

  <!-- 동적 필드들 -->
  <template v-for="(fieldData, index) in currentFields" :key="fieldData.value || index">
    <s-form-item :label="fieldData.label" :required="fieldData.required">
      <vee-field v-slot="{ errors, handleChange }" :name="fieldData.value">
        <!-- Input 타입 (문자열) -->
        <v-text-field
          v-if="fieldData.type === 'input'"
          :model-value="getFieldValue(fieldData.value)"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :type="fieldData.encrypt ? 'password' : 'text'"
          :placeholder="fieldData.placeholder"
          :error-messages="errors"
          @update:model-value="value => handleFieldChange(fieldData.value, value, handleChange)"
        />

        <!-- Number/Integer 타입 -->
        <v-text-field
          v-else-if="fieldData.type === 'number' || fieldData.type === 'integer'"
          :model-value="getFieldValue(fieldData.value)"
          variant="outlined"
          density="compact"
          hide-details="auto"
          type="number"
          :step="fieldData.step"
          :min="fieldData.min"
          :max="fieldData.max"
          :placeholder="fieldData.placeholder"
          :error-messages="errors"
          @update:model-value="value => handleFieldChange(fieldData.value, value, handleChange)"
        />

        <!-- Duration 타입 (숫자 + 단위) - 하위 호환성 유지 -->
        <div v-else-if="fieldData.type === 'duration'" class="form-item--half">
          <v-text-field
            :model-value="getCompositeValue(fieldData.value, 'value')"
            variant="outlined"
            density="compact"
            hide-details="auto"
            type="number"
            :placeholder="fieldData.placeholder"
            :error-messages="errors"
            @update:model-value="value => handleCompositeValueChange(fieldData.value, 'value', 'unit', fieldData.units || [], fieldData.unitItemValue || 'value', value, handleChange)"
          />
          <v-select
            :model-value="getCompositeValue(fieldData.value, 'unit')"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :items="fieldData.units || []"
            :item-title="fieldData.unitItemTitle || 'label'"
            :item-value="fieldData.unitItemValue || 'value'"
            :error-messages="errors"
            @update:model-value="value => handleCompositeOptionChange(fieldData.value, 'value', 'unit', value, handleChange)"
          />
        </div>

        <!-- Composite 타입 (값 + 옵션 조합) -->
        <div v-else-if="fieldData.type === 'composite' && fieldData.composite" class="form-item--half">
          <v-text-field
            :model-value="getCompositeValue(fieldData.value, fieldData.composite.valueField || 'value')"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :type="fieldData.composite.valueType || 'number'"
            :step="fieldData.composite.step"
            :min="fieldData.composite.min"
            :max="fieldData.composite.max"
            :placeholder="fieldData.placeholder"
            :error-messages="errors"
            @update:model-value="value => handleCompositeValueChange(fieldData.value, fieldData.composite.valueField || 'value', fieldData.composite.optionField || 'unit', fieldData.composite.options || [], fieldData.composite.optionItemValue || 'value', value, handleChange)"
          />
          <v-select
            :model-value="getCompositeValue(fieldData.value, fieldData.composite.optionField || 'unit')"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :items="fieldData.composite.options || []"
            :item-title="fieldData.composite.optionItemTitle || 'label'"
            :item-value="fieldData.composite.optionItemValue || 'value'"
            :error-messages="errors"
            @update:model-value="value => handleCompositeOptionChange(fieldData.value, fieldData.composite.valueField || 'value', fieldData.composite.optionField || 'unit', value, handleChange)"
          />
        </div>

        <!-- Checkbox 타입 -->
        <v-checkbox
          v-else-if="fieldData.type === 'checkbox'"
          :model-value="getFieldValue(fieldData.value)"
          :error-messages="errors"
          density="compact"
          hide-details="auto"
          :true-value="fieldData.trueValue || 'Y'"
          :false-value="fieldData.falseValue || 'N'"
          @update:model-value="value => handleFieldChange(fieldData.value, value, handleChange)"
        />

        <!-- Select 타입 -->
        <v-select
          v-else-if="fieldData.type === 'select'"
          :model-value="getFieldValue(fieldData.value)"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :items="fieldData.options || []"
          :item-title="fieldData.itemTitle || 'title'"
          :item-value="fieldData.itemValue || 'value'"
          :placeholder="fieldData.placeholder"
          :error-messages="errors"
          @update:model-value="value => handleFieldChange(fieldData.value, value, handleChange)"
        />

        <!-- Radio 타입 -->
        <v-radio-group
          v-else-if="fieldData.type === 'radio'"
          :model-value="getFieldValue(fieldData.value)"
          density="compact"
          hide-details="auto"
          :error-messages="errors"
          inline
          @update:model-value="value => handleFieldChange(fieldData.value, value, handleChange)"
        >
          <v-radio
            v-for="option in fieldData.options || []"
            :key="option[fieldData.itemValue || 'value']"
            :label="option[fieldData.itemTitle || 'title']"
            :value="option[fieldData.itemValue || 'value']"
            density="compact"
          />
        </v-radio-group>

        <!-- 타입 미지정/오타 fallback -->
        <span v-else class="error-text-color">
          Unsupported field type: {{ fieldData.type }}
        </span>
      </vee-field>

      <template #outer-append>
        <!-- 에러는 각 컴포넌트의 :error-messages로 처리, appendText만 표시 -->
        <span v-if="fieldData.appendText">
          {{ fieldData.appendText }}
        </span>
      </template>
    </s-form-item>
  </template>
</template>

<script setup>
import { computed, watch } from 'vue'
import { Field as VeeField } from 'vee-validate'
import { SFormItem } from '@/components'
import { ruleParamsToFields } from '@/utils/ruleParamsToFields'

const props = defineProps({
  /**
   * 폼 필드 설정 배열 (fieldGroups 미사용 시 사용)
   */
  fields: {
    type: Array,
    required: false,
    default: () => [],
  },
  /**
   * 필드 그룹 객체
   * 예: { basic: [...], billing: [...] }
   */
  fieldGroups: {
    type: Object,
    required: false,
    default: () => null,
  },
  /**
   * 그룹 선택 필드 설정 (fieldGroups 사용 시)
   * 예: { type: 'select', value: 'accountType', options: [...] }
   */
  groupSelector: {
    type: Object,
    required: false,
    default: () => null,
  },
  /**
   * 백엔드 템플릿 배열 (자동 변환)
   * 예: [{ id: 1, name: "템플릿1", ruleParams: [...] }]
   */
  templates: {
    type: Array,
    required: false,
    default: () => null,
  },
  /**
   * 템플릿 선택 필드 레이블
   */
  templateLabel: {
    type: String,
    default: '템플릿 선택',
  },
  /**
   * 템플릿 선택 필드명 (선택된 템플릿 ID가 저장될 필드)
   */
  templateField: {
    type: String,
    default: 'templateId',
  },
  /**
   * 폼 데이터 객체 (v-model)
   */
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  /**
   * 값이 저장될 상위 경로
   * 예: "accountData" → accountData.serviceAccount.projectId
   */
  valuePath: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

/**
 * 깊은 복사 유틸
 */
const deepClone = obj => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (Array.isArray(obj)) return obj.map(item => deepClone(item))

  const cloned = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key])
    }
  }
  return cloned
}

/**
 * 전체 경로 만들기 (valuePath + fieldPath)
 */
const getFullPath = fieldPath => {
  return props.valuePath ? `${props.valuePath}.${fieldPath}` : fieldPath
}

/**
 * 중첩 객체에서 값 가져오기
 */
const getNestedValue = (obj, path) => {
  if (!path) return obj
  const keys = path.split('.')
  let value = obj

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return undefined
    }
  }

  return value
}

/**
 * 중첩 객체에 값 설정하기 (immutable)
 */
const setNestedValue = (obj, path, value) => {
  const keys = path.split('.')
  const newObj = deepClone(obj)
  let current = newObj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!current[key] || typeof current[key] !== 'object' || Array.isArray(current[key])) {
      current[key] = {}
    }
    current = current[key]
  }

  current[keys[keys.length - 1]] = value
  return newObj
}

/**
 * 필드 값 가져오기
 */
const getFieldValue = fieldPath => {
  const fullPath = getFullPath(fieldPath)
  return getNestedValue(props.modelValue, fullPath)
}

/**
 * templates를 fieldGroups로 자동 변환
 */
const convertedFieldGroups = computed(() => {
  if (!props.templates || props.templates.length === 0) {
    return null
  }

  const groups = {}
  props.templates.forEach(template => {
    if (template.ruleParams && template.ruleParams.length > 0) {
      groups[template.id] = ruleParamsToFields(
        template.ruleParams,
        { valuePrefix: props.valuePath || 'ruleParams' }
      )
    }
  })

  return groups
})

/**
 * templates를 groupSelector로 자동 변환
 */
const convertedGroupSelector = computed(() => {
  if (!props.templates || props.templates.length === 0) {
    return null
  }

  return {
    type: 'select',
    label: props.templateLabel,
    required: true,
    value: props.templateField,
    options: props.templates.map(template => ({
      title: template.name,
      value: template.id
    }))
  }
})

/**
 * 최종 fieldGroups (templates 우선, 없으면 props.fieldGroups)
 */
const finalFieldGroups = computed(() => {
  return convertedFieldGroups.value || props.fieldGroups
})

/**
 * 최종 groupSelector (templates 우선, 없으면 props.groupSelector)
 */
const finalGroupSelector = computed(() => {
  return convertedGroupSelector.value || props.groupSelector
})

/**
 * fieldGroups + groupSelector 사용 시, 현재 선택된 필드 그룹
 */
const currentFields = computed(() => {
  if (finalFieldGroups.value && finalGroupSelector.value) {
    const selectorValue = getFieldValue(finalGroupSelector.value.value)
    if (selectorValue && finalFieldGroups.value[selectorValue]) {
      return finalFieldGroups.value[selectorValue]
    }
    return []
  }
  return props.fields
})

/**
 * groupSelector 변경 시, 이전 그룹 필드 값 초기화
 */
watch(
  () =>
    finalFieldGroups.value && finalGroupSelector.value
      ? getFieldValue(finalGroupSelector.value.value)
      : null,
  (newValue, oldValue) => {
    if (
      newValue === oldValue ||
      !finalFieldGroups.value ||
      !finalGroupSelector.value
    ) {
      return
    }

    const newFields = finalFieldGroups.value[newValue] || []
    const oldFields = oldValue !== undefined ? (finalFieldGroups.value[oldValue] || []) : []

    // modelValue 깊은 복사 후 이전 필드 값 제거
    const cloned = deepClone(props.modelValue)

    // oldValue가 있을 때만 이전 필드 제거
    if (oldValue !== undefined) {
      oldFields.forEach(field => {
        const fullPath = getFullPath(field.value)
        const keys = fullPath.split('.')
        let current = cloned

        for (let i = 0; i < keys.length - 1; i++) {
          const key = keys[i]
          if (current[key] && typeof current[key] === 'object') {
            current = current[key]
          } else {
            return
          }
        }

        delete current[keys[keys.length - 1]]
      })
    }

    // 새로운 필드의 defaultValue 설정
    let updatedCloned = cloned
    newFields.forEach(field => {
      if (field.defaultValue !== undefined) {
        const fullPath = getFullPath(field.value)

        // duration/composite 타입 처리
        if (field.type === 'duration') {
          const defaultUnit = field.defaultUnitValue || (field.units && field.units[0]?.value)
          const compositeValue = {
            value: field.defaultValue ? Number(field.defaultValue) : undefined,
            unit: defaultUnit
          }
          updatedCloned = setNestedValue(updatedCloned, fullPath, compositeValue)
        } else if (field.type === 'composite' && field.composite) {
          const valueField = field.composite.valueField || 'value'
          const optionField = field.composite.optionField || 'unit'
          const defaultOption = field.composite.defaultOptionValue || (field.composite.options && field.composite.options[0]?.value)
          const compositeValue = {
            [valueField]: field.defaultValue ? Number(field.defaultValue) : undefined,
            [optionField]: defaultOption
          }
          updatedCloned = setNestedValue(updatedCloned, fullPath, compositeValue)
        } else {
          // 일반 필드
          updatedCloned = setNestedValue(updatedCloned, fullPath, field.defaultValue)
        }
      }
    })

    emit('update:modelValue', updatedCloned)
  },
)

/**
 * Composite 필드의 값 가져오기 (일반화된 버전)
 * - 객체 형태: { value: 5, unit: 'm' } 또는 { size: 100, unit: 'MB' }
 * - 문자열: "5m" (duration 타입 하위 호환성)
 */
const getCompositeValue = (fieldPath, fieldName) => {
  const fullPath = getFullPath(fieldPath)
  const composite = getNestedValue(props.modelValue, fullPath)

  if (composite && typeof composite === 'object') {
    return composite[fieldName]
  }
  // duration 타입 하위 호환성: 문자열 파싱
  if (typeof composite === 'string' && fieldName === 'value') {
    const match = composite.match(/^(\d+)/)
    return match ? match[1] : undefined
  }
  if (typeof composite === 'string' && fieldName === 'unit') {
    const match = composite.match(/([a-z]+)$/i)
    return match ? match[1] : undefined
  }
  return undefined
}

/**
 * Composite 필드의 값 변경 처리
 */
const handleCompositeValueChange = (fieldPath, valueField, optionField, options, optionItemValue, value, handleChange) => {
  const fullPath = getFullPath(fieldPath)
  const currentComposite = getNestedValue(props.modelValue, fullPath) || {}
  const currentOption = currentComposite[optionField] || (options.length > 0 ? options[0][optionItemValue] : undefined)

  const newComposite = {
    ...currentComposite,
    [valueField]: value !== '' && value !== null && value !== undefined ? (typeof value === 'string' && !isNaN(value) ? Number(value) : value) : undefined,
    [optionField]: currentOption,
  }

  const newValue = setNestedValue(props.modelValue, fullPath, newComposite)
  emit('update:modelValue', newValue)
  handleChange(newComposite)
}

/**
 * Composite 필드의 옵션 변경 처리
 */
const handleCompositeOptionChange = (fieldPath, valueField, optionField, optionValue, handleChange) => {
  const fullPath = getFullPath(fieldPath)
  const currentComposite = getNestedValue(props.modelValue, fullPath) || {}
  const currentValue = currentComposite[valueField] ?? getCompositeValue(fieldPath, valueField)

  const newComposite = {
    ...currentComposite,
    [valueField]: currentValue,
    [optionField]: optionValue,
  }

  const newValue = setNestedValue(props.modelValue, fullPath, newComposite)
  emit('update:modelValue', newValue)
  handleChange(newComposite)
}

/**
 * 일반 필드 값 변경 처리
 */
const handleFieldChange = (fieldPath, value, handleChange) => {
  const fullPath = getFullPath(fieldPath)
  const newValue = setNestedValue(props.modelValue, fullPath, value)

  emit('update:modelValue', newValue)
  handleChange(value)
}
</script>

<style lang="scss" scoped>
@import url('./SFormGenerator.scss');
</style>
