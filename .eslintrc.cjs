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
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],  // <script> 블록에서 작은따옴표 사용
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'vueSingleQuote': false, // .vue 파일의 <template>에서는 큰따옴표 사용
      },
    ],
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
