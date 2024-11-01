import regexUtil from '@/utils/regexUtil.js'

const emptyCheckList = [undefined, null, '', 'undefined']

const isEmpty = val => {
  if (typeof val !== typeof 'string') {
    return false
  }
  const value = val.trim()
  // eslint-disable-next-line consistent-return
  if (emptyCheckList.includes(value)) return true
  // eslint-disable-next-line consistent-return
  return false
}

// 한글 제거 함수
const removeKoreanCharacters = stringData => {
  if (typeof stringData !== 'string') {
    throw Error('Invalid stringData type')
  }
  return stringData.replace(regexUtil.REG_ALLOW_KOR, '')
}
//param 은 object
const resolvePathVariable = (urlTemplate, params) => {
  //return urlTemplate.replace(/:([a-zA-Z]+)/g, (_, key) => params[key])
  return urlTemplate.replace(/{([a-zA-Z]+)}/g, (_, key) => params[key])
}

export default {
  isEmpty, removeKoreanCharacters, resolvePathVariable
}
