module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'indent': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/html-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': false
    }],
    'import/extensions': ['error', 'always']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
