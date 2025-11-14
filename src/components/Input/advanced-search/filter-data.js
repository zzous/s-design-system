import dateUtil from '../../../utils/date.js'

// --- 연산자 함수 정의 (operators) ---
const operators = {
  // 문자열/숫자/날짜: '같음' 연산자 (=)
  '=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA);
      const dateB = dateUtil.parseDate(valueB);
      if (!dateA || !dateB) return false;
      return dateA.isSame(dateB); // 초/밀리초까지 정확히 일치
    }
    const valA = String(valueA).toLowerCase()
    const valB = String(valueB).toLowerCase()
    return valA === valB
  },

  // 문자열: '포함' 연산자 (:)
  ':': (valueA, valueB, type) => {
    const valA = String(valueA).toLowerCase()
    const valB = String(valueB).toLowerCase()
    return valA.includes(valB)
  },

  // 숫자/날짜: '크거나 같음' 연산자 (>=)
  '>=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA);
      const dateB = dateUtil.parseDate(valueB);
      if (!dateA || !dateB) return false;
      return dateA.isSameOrAfter(dateB); // 초/밀리초까지 같거나 이후
    }
    return parseFloat(valueA) >= parseFloat(valueB);
  },

  // 숫자/날짜: '작거나 같음' 연산자 (<=)
  '<=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA);
      const dateB = dateUtil.parseDate(valueB);
      if (!dateA || !dateB) return false;
      return dateA.isSameOrBefore(dateB); // 초/밀리초까지 같거나 이전
    }
    return parseFloat(valueA) <= parseFloat(valueB);
  },

  // 숫자/날짜: '보다 작음' 연산자 (<)
  '<': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA);
      const dateB = dateUtil.parseDate(valueB);
      if (!dateA || !dateB) return false;
      return dateA.isBefore(dateB); // 초/밀리초까지 명확히 이전
    }
    return parseFloat(valueA) < parseFloat(valueB);
  },

  // 숫자/날짜: '보다 큼' 연산자 (>)
  '>': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA);
      const dateB = dateUtil.parseDate(valueB);
      if (!dateA || !dateB) return false;
      return dateA.isAfter(dateB); // 초/밀리초까지 명확히 이후
    }
    return parseFloat(valueA) > parseFloat(valueB);
  },
}

// --- 메인 일반 함수 ---
/**
 * 주어진 데이터 리스트를 필터 옵션에 따라 필터링하는 단순 함수
 * @param {Array<Object>} list 원본 데이터 리스트 (e.g., table items)
 * @param {Array<Object>} filterOptions 필터 설정
 * @returns {Array<Object>} 필터링된 데이터 리스트
 */
export function filterData(list, filterOptions) {
  console.log('list, filterOptions', list, filterOptions)
  const currentFilters = filterOptions

  // 1. 필터 옵션이 없으면 원본 리스트를 그대로 반환합니다.
  if (!currentFilters || currentFilters.length === 0) {
    return list
  }

  // 2. 필터링 로직을 실행합니다.
  return list.filter(item => {
    // 🚨 수정된 부분: every() 대신 some()을 사용하여 'OR' 조건으로 변경했습니다.
    // 각 아이템이 필터 조건 중 '하나라도' 만족하는지 확인합니다. (OR 조건)
    return currentFilters.some(filter => {
      const { field, operator, value, type } = filter

      const itemValue = item[field]
      // 5. 해당하는 연산자 함수를 찾아 실행합니다.
      const operation = operators[operator] // *operators 객체는 변경 없습니다.

      // 4. 아이템에 해당 필드가 없거나 연산자가 정의되어 있지 않으면 false (가드 로직)
      //    -> 'OR' 조건이므로 이 필터만 통과하지 못하고 다음 필터로 넘어갑니다.
      if (itemValue === undefined || itemValue === null || !operation) {
        return false
      }

      // 6. 필터 조건을 만족하면 'true'를 반환하고, some() 루프를 즉시 종료합니다.
      return operation(itemValue, value, type)
    })
  })
}
