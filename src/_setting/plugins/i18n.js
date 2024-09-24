// src/i18n.js
import { createI18n } from 'vue-i18n'
import ko from '@/_setting/i18n/locales/ko.json'

// 브라우저 기본 언어 세팅
export const navLang = navigator.language.substring(0, 2) || 'ko'

// 언어별 번역 메시지 설정
const messages = {
  en: {
    welcome: 'Welcome'
    // 다른 번역 메시지 추가
  },
  ko: {
    ...ko,
    fields: ko.fields,
    validation: ko.validation
  }
  // 필요한 다른 언어 추가
}

// i18n 인스턴스 생성
const i18n = createI18n({
  legacy: false,
  locale: navLang, // 기본 언어 설정
  fallbackLocale: 'ko', // 기본 언어가 없을 때 대체 언어
  messages // 번역 메시지 등록
})

export default i18n
