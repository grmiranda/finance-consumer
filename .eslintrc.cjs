/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, endOfLine: 'auto' },
    ],
  },
}
