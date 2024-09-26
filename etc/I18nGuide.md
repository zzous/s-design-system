# i18next를 활용한 문자열 추출 및 Google Sheets 연동 가이드

## 1. 개요

이 가이드는 i18next를 사용하여 소스 코드에서 문자열을 추출하고, 이를 Google Sheets와 연동하여 업로드 및 다운로드하는 기능의 사용법을 설명합니다.

## 2. Google Sheets 연동

### 2.1 Google Sheets API 설정

Google Cloud Console에서 프로젝트를 생성하고 Sheets API를 활성화합니다.

### 2.2 인증 설정

서비스 계정 키를 생성하고 환경 변수로 설정합니다.

인증키는 보안이슈로 인하여 깃랩(또는 공유저장소)에 저장할 수 없기 때문에 아래의 가이드에 따라 인증키를 다운로드 받아 `auth.json` 파일을 i18n directory에 추가해 주시기 바랍니다.

## 3. 사용 방법

### 3.1 문자열 추출: `pnpm run i18n:extract`

소스 코드에서 i18n(’’), t(’’)로 작성된 문자열을 추출하여 _setting/i18n directory에 ko/translation.json 등의 파일로 자동 생성합니다.

### 3.2 Google Sheets 업로드:  `pnpm run i18n:push`

추출된 파일을 구글 스프레드시트에 업로드 합니다.

### 3.3 Google Sheets 다운로드: `pnpm run i18n:pull`

구글 스프레드시트에 업로드 된 파일을 번역자가 언어별로 작성하고 작업이 완료된 스프레드시트를 다운로드 받아 {lang}/translation.json 파일에 덮어씌웁니다.

## 4. 추가 개선사항

- 다국어 지원 확장

실제 프로젝트에 적용할 때는 보안, 성능, 사용자 경험 등을 고려하여 추가적인 개선이 필요할 수 있습니다.
