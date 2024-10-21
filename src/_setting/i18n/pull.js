import fs from 'node:fs'

import authenticate from './authenticate.js'
import { SHEET_INFO } from './.credentials/sheet-info.js'

const SPREADSHEET_ID = SHEET_INFO.ID // 스프레드시트 ID

const saveTranslations = data => {
  // 한국어와 영어 데이터를 저장할 객체
  const koTranslations = {}
  const enTranslations = {}

  for (let i = 1; i < data.length; i++) {
    const [key, koValue, enValue] = data[i]
    koTranslations[key] = koValue
    enTranslations[key] = enValue
  }

  // console.log(koTranslations)

  fs.writeFileSync(`./src/_setting/i18n/ko/translation.json`, JSON.stringify(koTranslations, null, 2))
  fs.writeFileSync(`./src/_setting/i18n/en/translation.json`, JSON.stringify(enTranslations, null, 2))

  console.log('한국어와 영어 번역 파일이 업데이트되었습니다.')
}

async function fetchTranslations(sheets, sheetNames) {
  const range = `${sheetNames}!A1:C` // 가져올 범위 설정

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
  })

  const data = response.data.values
  // 데이터 처리 로직 추가
  saveTranslations(data)
}

// 메인 실행 함수
const __main__ = async () => {
  const sheets = await authenticate()

  const { data } = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  })

  // 구글 시트 이름 가져오기
  const sheetNames = data.sheets.map(sheet => sheet.properties.title)

  await fetchTranslations(sheets, sheetNames)
}

__main__().catch(console.error)
