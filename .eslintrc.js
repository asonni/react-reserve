module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  extends: ['eslint:recommended'],
  globals: {
    process: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'react/jsx-no-undef': 'error',
    'no-console': 0
  }
};
