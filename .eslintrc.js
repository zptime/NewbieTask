module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'no-debugger': 'error',
    'indent': ['warn', 2],
    "vue/html-indent": ["error", 2, {
        "baseIndent": 1,
    }],
    'vue/no-v-html': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
