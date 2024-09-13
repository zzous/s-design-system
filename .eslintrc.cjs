/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
  ],
  rules: {
    'max-len': ['error', { 'code': 140, 'tabWidth': 2, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true }],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],  // <script> 블록에서 작은따옴표 사용
    'no-warning-comments': 'off',  // 주석에서 경고 단어 검사 비활성화
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        "printWidth": 140,
        "ignoreComments": true,
        'vueSingleQuote': false, // .vue 파일의 <template>에서는 큰따옴표 사용
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'Identifier[name=/^[a-zA-Z]*Count$/]',
        'message': '"Count"를 "Cnt" 로 바꿔 주세요.'
      },
      {
        'selector': 'Identifier[name=/^[a-zA-Z]*Description$/]',
        'message': '"Description"를 "Desc"로 바꿔 주세요.'
      },
      {
        'selector': 'Identifier[name=/^[a-zA-Z]*Status$/]',
        'message': '"Status"를 "State"로 바꿔 주세요.'
      }
    ]
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
