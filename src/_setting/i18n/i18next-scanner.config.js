export default {
  // 원하는 언어를 배열 형태로 설정합니다.
  options: {
    debug: true,
    func: {
      list: ['$t', 't', 'i18next.t'],
      // 사용할 함수 목록
      extensions: ['.js', '.vue'] // 탐색할 파일 확장자
    },
    fallbackLng: 'ko',
    lngs: ['ko', 'en'],
    // 지원 언어
    nsSeparator: ':',
    // 네임스페이스 구분자
    keySeparator: '.',
    // 키 구분자
    // 소스 파일을 검색할 경로를 지정합니다.
    resource: {
      loadPath: './i18n/{{lng}}/{{ns}}.json',
      // 번역 파일의 경로
      savePath: './i18n/{{lng}}/{{ns}}.json',
      // JSON 파일로 저장할 때의 형식
      jsonIndent: 2,
      lineEnding: '\n'
    },
    // 탐색할 파일 경로
    ns: ['translation'],
    // 사용할 네임스페이스
    // 소스 코드에서 검색할 경로
    context: ['src/**/*.{js,vue}' // 소스 코드 경로
    ]
  }
}
