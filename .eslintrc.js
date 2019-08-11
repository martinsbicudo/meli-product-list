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
    shallow: true,
    render: true,
    mount: true,
    window: true,
    document: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:jest/recommended'],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['spec.js', '.jsx'] }],
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
