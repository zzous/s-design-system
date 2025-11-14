import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

const DATE_FORMATS = ['YYYY-MM-DD', 'YYYY/MM/DD', 'YYYYMMDD', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DDTHH:mm:ss'];

// 'let' 키워드로 기본 타임존 변수 선언
let defaultTimezone = 'Asia/Seoul';
const defaultDateFormat = 'YYYY-MM-DD';

/**
 * 라이브러리 설정을 변경하는 함수
 * @param {object} options - 설정 옵션 객체
 * @param {string} options.timezone - 변경할 타임존
 */
function setDateConfig(options) {
  if (options.timezone) {
    defaultTimezone = options.timezone;
  }
}


// --- 날짜 파싱 헬퍼 함수 ---
/**
 * 날짜 데이터를 Day.js 객체로 변환하는 헬퍼 함수
 * @param {string|Date|dayjs} dateValue - 원본 날짜 값
 * @returns {dayjs.Dayjs|null} 유효한 dayjs 객체, 아니면 null
 */
const parseDate = (dateValue) => {
  // SAdvancedSearch에서 이미 type: 'date'로 확정된 값이라고 가정하고 파싱을 시도합니다.
  const parsed = dayjs(dateValue);

  // 파싱된 dayjs 객체가 유효한지 최종 확인합니다.
  return parsed.isValid() ? parsed : null;
}

// 기존 함수들: 이제 매개변수 대신 내부 변수를 사용합니다.
function getCurrentDate(format = defaultDateFormat) {
  return dayjs().tz(defaultTimezone).format(format);
}


/**
 * 특정 날짜에 지정된 값과 단위를 더하거나 빼서 새로운 날짜를 계산합니다.
 * @param {string|Date|dayjs} date - 기준이 될 날짜
 * @param {number} value - 더하거나 뺄 값 (양수면 더하기, 음수면 빼기)
 * @param {'day'|'week'|'month'|'year'} unit - 계산 단위
 * @param {string} format - 반환할 날짜의 포맷 (기본값: 'YYYY-MM-DD')
 * @returns {string} 계산된 날짜 문자열
 */
function calculateDate(date, value, unit, format = defaultDateFormat) {
  return dayjs(date).tz(defaultTimezone).add(value, unit).format(format);
}


/**
 * 주어진 날짜를 지정된 포맷으로 변환합니다.
 * @param {string|Date|dayjs} date - 포맷을 변경할 날짜
 * @param {string} format - 날짜 포맷 문자열 (기본값: 'YYYY-MM-DD')
 * @returns {string} 포맷된 날짜 문자열
 */
function getFormattedDate(date, format = defaultDateFormat) {
  if (!date) {
    console.error('날짜를 입력해주세요.');
    return null;
  }
  return dayjs(date).tz(defaultTimezone).format(format);
}

/**
 * 주어진 문자열이 지정된 포맷 목록 중 하나와 일치하는지 엄격하게 검사합니다.
 * @param {string} dateString - 검사할 날짜 문자열
 * @param {string[]} formats - 검사할 포맷 문자열 배열 (예: ['YYYY-MM-DD', 'MM/DD/YYYY'])
 * @returns {boolean} 유효하면 true, 아니면 false
 */
function isValidDateFormat(dateString, formats= DATE_FORMATS) {
  if (typeof dateString !== 'string' || !formats || formats.length === 0) {
    return false;
  }

  // Day.js의 엄격 모드(strict=true)를 사용하여 정확하게 포맷 일치 여부 확인
  for (const format of formats) {
    if (dayjs(dateString, format, true).isValid()) {
      return true;
    }
  }

  return false;
}

export default {
  defaultDateFormat,
  setDateConfig,
  parseDate,
  getCurrentDate,
  calculateDate,
  getFormattedDate,
  isValidDateFormat,
};
