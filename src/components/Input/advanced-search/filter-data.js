import dateUtil from '../../../utils/date.js'

// --- 연산자 함수 정의 (operators) ---
const operators = {
  // 문자열/숫자/날짜: '같음' 연산자 (=)
  '=': (valueA, valueB, type) => {
    // 1. 검색 값 (valueB)이 '-'일 경우:
    // 실제 데이터 값(valueA)이 null 또는 undefined 면 '값이 없음'으로 간주하여 일치(true) 처리
    if (valueB === '-') {
      return valueA === null || valueA === undefined
    }

    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA) // 리스트 항목의 날짜 (시분초 있음)
      const dateB = dateUtil.parseDate(valueB) // 검색 값 (date picker, 보통 시분초는 00:00:00)

      if (!dateA || !dateB) return false

      return dateA.isSame(dateB, 'day')
    }

    // 3. 일반 문자열 비교 로직
    const valA = String(valueA).toLowerCase()
    const valB = String(valueB).toLowerCase()
    return valA === valB
  },

// 문자열 포함 ':' 연산자
  ':': (valueA, valueB, type) => {
    // 1. 검색 값 (valueB)이 '-'일 경우:
    // 실제 데이터 값(valueA)이 null 또는 undefined 면 '값이 없음'으로 간주하여 일치(true) 처리
    if (valueB === '-') {
      return valueA === null || valueA === undefined
    }

    // 2. 일반 포함 비교 로직
    const valA = String(valueA).toLowerCase()
    const valB = String(valueB).toLowerCase()
    return valA.includes(valB)
  },

  // 숫자/날짜: '크거나 같음' 연산자 (>=)
  '>=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA)
      const dateB = dateUtil.parseDate(valueB)
      if (!dateA || !dateB) return false

      // 'day' 단위로 비교, itemValue(dateA)가 검색값(dateB)과 같은 날이거나 이후인지 확인
      return dateA.isSameOrAfter(dateB, 'day')
    }
    return parseFloat(valueA) >= parseFloat(valueB)
  },

  // 숫자/날짜: '작거나 같음' 연산자 (<=)
  '<=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA)
      const dateB = dateUtil.parseDate(valueB)
      if (!dateA || !dateB) return false

      // 'day' 단위로 비교, itemValue(dateA)가 검색값(dateB)과 같은 날이거나 이전인지 확인
      return dateA.isSameOrBefore(dateB, 'day')
    }
    return parseFloat(valueA) <= parseFloat(valueB)
  },

  // 숫자/날짜: '보다 작음' 연산자 (<)
  '<': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA)
      const dateB = dateUtil.parseDate(valueB)
      if (!dateA || !dateB) return false

      return dateA.isBefore(dateB, 'day')
    }
    return parseFloat(valueA) < parseFloat(valueB)
  },

  // 숫자/날짜: '보다 큼' 연산자 (>)
  '>': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA)
      const dateB = dateUtil.parseDate(valueB)
      if (!dateA || !dateB) return false

      // ⭐️ 수정됨: 'day' 단위로 비교하여, 검색 날짜 다음 날부터 포함
      return dateA.isAfter(dateB, 'day')
    }
    return parseFloat(valueA) > parseFloat(valueB)
  },
}

/**
 * 주어진 데이터 리스트를 필터 옵션에 따라 필터링하는 단순 함수
 * @param {Array<Object>} list 원본 데이터 리스트 (e.g., table items)
 * @param {Array<Object>} filterOptions 필터 설정
 * @returns {Array<Object>} 필터링된 데이터 리스트
 */
export function filterData(list, filterOptions) {
  const currentFilters = filterOptions

  if (!currentFilters || currentFilters.length === 0) { return list }

  return list.filter(item => {
    // 항목은 모든 필터 중 최소 하나(some)의 조건을 통과해야 합니다.
    return currentFilters.some(filter => {
      const { field, operator, value, type } = filter

      const itemValue = item[field]
      const operation = operators[operator]

      // 1. 연산자 함수가 없으면 에러 처리
      if (!operation) { return false }

      // 2. 검색 값(value)이 '-' 일 경우: itemValue가 null/undefined 통과시킵니다.
      //    (이후 operator 로직에서 valueB('-')와 itemValue(null/undefined)를 비교하게 됨)
      if (value === '-') { return operation(itemValue, value, type) }

      // 3. 검색 값이 '-'가 아닐 경우: itemValue가 null/undefined 면 이 필터 조건은 통과하지 못합니다.
      if (itemValue === undefined || itemValue === null) { return false }

      // 4. 일반적인 필터링 실행
      return operation(itemValue, value, type)
    })
  })
}
