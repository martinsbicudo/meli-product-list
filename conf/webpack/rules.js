const { IS_PROD } = require('../constants');

module.exports = () => [
  {
    test: /\.(eot|woff2?|ttf|otf|svg|jpe?g|png|svg|gif|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: IS_PROD ? '' : '[path][name].[ext]',
          publicPath: '/_next/static/',
          outputPath: './static',
        },
      },
    ],
  },
];
