// src/i18n.js
import i18next from 'i18next'
import { computed } from 'vue'

import ko_KR from './ko/translation.json'
import en_US from './en/translation.json'

// 브라우저 기본 언어 세팅
export const navLang = navigator.language.substring(0, 2) || 'ko'

const resources = {
  ko: { translation: ko_KR },
  en: { translation: en_US },
}

// i18n 인스턴스 생성
i18next.init({
  lng: navLang,
  fallbackLng: 'ko',
  resources,
})

export const useI18n = () => {
  const t = (key, options) => {
    return i18next.t(key, options)
  }

  const tt = (key, options) => {
    return computed(() => i18next.t(key, options)).value
  }

  const changeLanguage = lng => {
    i18next.changeLanguage(lng)
  }

  return {
    t,
    tt,
    changeLanguage,
  }
}

export default i18next
