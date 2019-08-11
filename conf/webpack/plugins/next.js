const withESLint = require('next-eslint');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const { IS_PROD } = require('../../constants');

module.exports = [
  [withESLint],
  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: IS_PROD
        ? '[hash:base64:3]__[hash:base64:5]'
        : '[local]--[hash:base64:5]',
    },
  }],
  [withSass, {
    sassLoaderOptions: {
      data: `
        @import "client/static/sass/global";
      `,
    },
  }],
];
