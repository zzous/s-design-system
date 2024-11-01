//정규식 네이밍 룰
/*
 * REG_{ALLOW or PROHIBIT}_{설명}
 * 허용 일 경우 ALLOW, 방지 일 경우 PROHIBIT
 */
const REG_ALLOW_ENG = /^[a-zA-Z]+$/
const REG_ALLOW_ENG_NUM_HYPHEN = /^[a-zA-Z0-9-]+$/
const REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS = /[^a-zA-Z0-9!@#$%^&*(),.?":;{}|<>~`'[\]\\/\-_+=]/g
const REG_ALLOW_KOR = /[\u3131-\u318E\uAC00-\uD7A3]/g // 한글 정규식

const REG_DOMAIN = /(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})?$/

export default { REG_ALLOW_ENG, REG_ALLOW_ENG_NUM_HYPHEN, REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS, REG_ALLOW_KOR, REG_DOMAIN }
