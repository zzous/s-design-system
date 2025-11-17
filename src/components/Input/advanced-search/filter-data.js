import dateUtil from '../../../utils/date.js'

// --- 연산자 함수 정의 (operators) ---
const operators = {
  // 문자열/숫자/날짜: '같음' 연산자 (=)
  '=': (valueA, valueB, type) => {
    if (type === 'date') {
      const dateA = dateUtil.parseDate(valueA) // 리스트 항목의 날짜 (시분초 있음)
      const dateB = dateUtil.parseDate(valueB) // 검색 값 (date picker, 보통 시분초는 00:00:00)

      if (!dateA || !dateB) return false

      return dateA.isSame(dateB, 'day')
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
      const dateA = dateUtil.parseDate(valueA)
      const dateB = dateUtil.parseDate(valueB)
      if (!dateA || !dateB) return false

      // ⭐️ 수정됨: 'day' 단위로 비교, itemValue(dateA)가 검색값(dateB)과 같은 날이거나 이후인지 확인
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

      // ⭐️ 'day' 단위로 비교, itemValue(dateA)가 검색값(dateB)과 같은 날이거나 이전인지 확인
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
  // console.log('list, filterOptions', list, filterOptions)
  const currentFilters = filterOptions

  // 필터 옵션이 없으면 원본 리스트 반환
  if (!currentFilters || currentFilters.length === 0) { return list }

  return list.filter(item => {
    return currentFilters.some(filter => {
      const { field, operator, value, type } = filter

      const itemValue = item[field]
      const operation = operators[operator] // *operators 객체는 변경 없습니다.

      if (itemValue === undefined || itemValue === null || !operation) {
        return false
      }
      return operation(itemValue, value, type)
    })
  })
}
