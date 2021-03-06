const StylelintBarePlugin = require('stylelint-bare-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const { IS_PROD } = require('../../constants');

module.exports = (config) => {
  if (!IS_PROD) {
    config.plugins.push(
      new StylelintBarePlugin(),
    );
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      'process.env.IS_PROD': IS_PROD,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
    }),
  );

  return config;
};
