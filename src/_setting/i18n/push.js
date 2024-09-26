// 번역 데이터를 구글 스프레드시트에 업로드하는 함수
import fs from 'node:fs'

import authenticate from './authenticate.js'
import { SHEET_INFO } from './.credentials/sheet-info.js'
const ko_KR_PATH =  './src/_setting/i18n/ko/translation.json'
const en_US_PATH =  './src/_setting/i18n/en/translation.json'

const SPREADSHEET_ID = SHEET_INFO.ID // 스프레드시트 ID

const dataSet = () => {
  const koJsonData = JSON.parse(fs.readFileSync(ko_KR_PATH, 'utf-8'))
  const enJsonData = JSON.parse(fs.readFileSync(en_US_PATH, 'utf-8'))

    // 병합된 결과를 담을 배열 초기화
  const mergedData = [['key', '한국어', '영어']];

  // 모든 키에 대해 ko와 en의 값을 병합
  const keys = new Set([...Object.keys(koJsonData), ...Object.keys(enJsonData)]);

  keys.forEach((key) => {
    const koValue = koJsonData[key] || '_N/A'; // ko에 값이 없으면 _N/A 문자열
    const enValue = enJsonData[key] || '_N/A'; // en에 값이 없으면 _N/A 문자열
    mergedData.push([key, koValue, enValue]);
  })

  return mergedData
}

// 스프레드시트에서 데이터만 지우는 함수
const clearSpreadsheetData = async (sheets, sheetName) => {

  // 시트의 데이터 범위를 비우기 위한 요청
  const request = {
    spreadsheetId: SPREADSHEET_ID,
    range: sheetName, // 비우려는 시트 이름을 설정 (예: '시트1')
  };

  try {
    await sheets.spreadsheets.values.clear(request);
    console.log('스프레드시트의 모든 데이터를 서식은 남긱고 지웠습니다.');
  } catch (err) {
    console.error('데이터 삭제 중 오류 발생:', err);
  }
}


/**
 * Google Sheets API를 사용하여 번역 데이터를 업로드하는 함수
 * @param {Object} sheets - Google Sheets API 인스턴스
 * @param {string} sheetName - 업로드할 시트의 이름
 */
const uploadTranslations = async (sheets, sheetName) => {
  // JSON 데이터를 시트에 맞는 배열 형식으로 변환
  const values = dataSet()

  // 시트에 데이터 업로드
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1:C`, // 시트의 범위 지정 (A1:Bn) 데이터 셋이 늘어날 경우(언어팩이 추가될 경우) 수정
    valueInputOption: 'RAW', // 데이터 그대로 업로드
    resource: {
      values // 헤더 및 데이터
    }
  })
  console.log(`Data uploaded to ${sheetName} successfully.`)
}

// 메인 실행 함수
const __main__ = async() =>  {
  const sheets = await authenticate()

  const { data } = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID
  })

  // 구글 시트 이름 가져오기
  const sheetNames = data.sheets.map(sheet => sheet.properties.title)

  await clearSpreadsheetData(sheets, sheetNames)

  await uploadTranslations(sheets, sheetNames)
}

__main__().catch(console.error)
