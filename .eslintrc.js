const aliases = require('./conf/webpack/aliases');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jest',
  ],
  globals: {
    React: true,
    render: true,
    fireEvent: true,
    createAxiosMock: true,
    renderHook: true,
    act: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:jest/recommended'],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['spec.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/anchor-is-valid': 0
  },
  settings: {
    'import/resolver': {
      alias: {
        map: Object.entries(aliases),
        extensions: ['.js', '.jsx', '.scss']
      }
    }
  }
};
