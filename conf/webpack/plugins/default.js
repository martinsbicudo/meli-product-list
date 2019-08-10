const webpack = require('webpack');
const { IS_PROD } = require('../../constants');

module.exports = (config) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      'process.env.IS_PROD': IS_PROD,
    }),
  );

  return config;
};
