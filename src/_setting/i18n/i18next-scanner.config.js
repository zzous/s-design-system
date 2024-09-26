import * as _ from 'lodash-es'
import fs from 'node:fs'
import path from 'node:path'

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
  },
  // Custom transform을 사용하여 기존 파일과 병합
  transform: function customTransform(file, enc, done) {
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);

    // 새로운 번역 키 추출
    parser.parseFuncFromString(content, { list: ['$t', 't', 'i18next.t'] }, (key, options) => {
      parser.set(key, options);
    });

    done();
  },
  flush: function postProcess(done) {
    const parser = this.parser;

    // 언어별로 파일을 처리
    const languages = parser.options.lngs;
    const namespaces = parser.options.ns;

    const saveFile = (filePath, existingData, newData) => {
      console.log(existingData, newData)
      const mergedData = _.merge(newData, existingData);
        console.log('mergedData', mergedData)
        // 병합된 데이터로 파일 덮어쓰기
        console.log(filePath)
        fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2));
    }

    console.log('postProcess', namespaces);
    languages.forEach((lng) => {
      namespaces.forEach((ns) => {
        const filePath = path.resolve(`./src/_setting/i18n/${lng}/${ns}.json`);

        // 기존 파일 읽기
        let existingData = {};
        if (fs.existsSync(filePath)) {
          existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
        console.log(existingData)
        // 새로 수집된 데이터 가져오기
        const newData = parser.get({ lng, ns });

        // 기존 데이터와 병합
        saveFile(filePath, existingData, newData[lng][ns]);
      });
    });

    done();
  }
}
