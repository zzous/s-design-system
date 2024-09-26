// src/i18n.js
import i18next from 'i18next'
import { initI18nextVue } from 'i18next-vue'
import ko_KR from './ko/translation.json'
import en_US from './en/translation.json'

// 브라우저 기본 언어 세팅
export const navLang = navigator.language.substring(0, 2) || 'ko'

const resources = {
  ko: { translation: ko_KR },
  en: { translation: en_US }
}

// i18n 인스턴스 생성
i18next.use(initI18nextVue).init({
  lng: navLang,
  fallbackLng: 'ko',
  resources
})

const i18n = initI18nextVue(i18next)

export default i18n
