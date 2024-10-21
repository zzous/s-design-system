import { google } from 'googleapis'

// 서비스 계정 JSON 파일 로드
const SERVICE_ACCOUNT_FILE = './src/_setting/i18n/.credentials/auth.json'
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export default async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: SCOPES,
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
  // return auth.getClient()
}
