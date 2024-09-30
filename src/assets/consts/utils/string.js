import { REG_ALLOW_KOR } from '@/assets/consts/regex'

const checkList = [undefined, null, '', 'undefined']
export const isEmpty = val => {
  if (typeof val !== typeof 'string') {
    return false
  }
  const value = val.trim()
  // eslint-disable-next-line consistent-return
  if (checkList.includes(value)) return true
  // eslint-disable-next-line consistent-return
  return false
}

// 한글 제거 함수
export const removeKoreanCharacters = stringData => {
  if (typeof stringData !== 'string') {
    throw Error('Invalid stringData type')
  }
  return stringData.replace(REG_ALLOW_KOR, '')
}
