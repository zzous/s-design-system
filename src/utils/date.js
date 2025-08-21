import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

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

export default {
  defaultDateFormat,
  setDateConfig,
  getCurrentDate,
  calculateDate,
  getFormattedDate,
};
