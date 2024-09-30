/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    /*'plugin:prettier/recommended'*/
  ],
  rules: {
    'semi': ['error', 'never'], // 세미콜론 사용 금지
    // 속성당 최대 개수 설정
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 3 }, // 한 줄에서 최대 3개의 속성
      multiline: { max: 1 } // 여러 줄일 때는 속성당 한 줄
    }],

    // 첫 번째 속성의 위치 설정
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside', // 한 줄일 경우 속성은 동일한 줄에
      multiline: 'below' // 여러 줄일 경우 첫 속성은 다음 줄에
    }],

    // Mustache 간 공백 강제
    'vue/mustache-interpolation-spacing': ['error', 'always'], // {{ }} 간 공백 강제

    // HTML 요소 내용 줄바꿈 설정
    'vue/multiline-html-element-content-newline': 'error', // 여러 줄 HTML 요소는 줄바꿈
    'vue/singleline-html-element-content-newline': 'error', // 한 줄 HTML 요소도 줄바꿈

    // 속성에 하이픈 사용 강제
    'vue/attribute-hyphenation': 'error', // 하이픈 속성 강제 사용

    // HTML 닫는 괄호 줄바꿈 설정
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never', // 한 줄 닫는 괄호는 줄바꿈 없음
      multiline: 'always' // 여러 줄 닫는 괄호는 줄바꿈 있음
    }],

    // 닫는 괄호와 태그 사이의 공백 강제
    'vue/html-closing-bracket-spacing': 'error', // 닫는 괄호에 공백 강제

    // HTML 끝 태그 강제 사용
    'vue/html-end-tags': 'error', // 끝 태그 강제 사용

    // HTML 들여쓰기 설정
    'vue/html-indent': ['error', 2], // 들여쓰기는 2칸으로

    // HTML 인용구 설정
    'vue/html-quotes': 'error', // HTML 속성 값은 따옴표로 묶음

    // HTML 셀프 클로징 태그 설정
    'vue/html-self-closing': 'error', // 셀프 클로징 태그 강제 사용

    // 최대 줄 길이 설정
    'vue/max-len': ['error', {
      code: 140, // 코드 최대 줄 길이 140
      template: 140, // 템플릿 최대 줄 길이 140
      ignoreUrls: true, // URL 제외
      ignoreStrings: true, // 문자열 제외
      ignoreTemplateLiterals: true, // 템플릿 리터럴 제외
      ignoreRegExpLiterals: true // 정규 표현식 제외
    }],
    'vue/multi-word-component-names': 'off',
    'vue/no-multi-spaces': ['error'], // Vue 템플릿에서 여러 개의 공백을 에러로 처리
    'no-trailing-spaces': ['error'], // 라인 끝 공백 에러로 처리
    quotes: ['error', 'single', { allowTemplateLiterals: true }], // <script> 블록에서 작은따옴표 사용
    'no-warning-comments': 'off', // 주석에서 경고 단어 검사 비활성화
    /*'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 140,
        ignoreComments: true,
        vueSingleQuote: false // .vue 파일의 <template>에서는 큰따옴표 사용
      }
    ],*/
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Identifier[name=/^[a-zA-Z]*Count$/]',
        message: '"Count"를 "Cnt" 로 바꿔 주세요.'
      },
      {
        selector: 'Identifier[name=/^[a-zA-Z]*Description$/]',
        message: '"Description"를 "Desc"로 바꿔 주세요.'
      },
      {
        selector: 'Identifier[name=/^[a-zA-Z]*Status$/]',
        message: '"Status"를 "State"로 바꿔 주세요.'
      }
    ],
    'no-multi-spaces': ['error'], // 여러 개의 공백을 에러로 처리
  },
  /*overrides: [
    {
      files: ['cypress/e2e/!**!/!*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/!**!/!*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],*/
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    ecmaVersion: 'latest'
  }
}
