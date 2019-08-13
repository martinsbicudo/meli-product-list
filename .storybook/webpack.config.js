const { webpack } = require('../conf/webpack');

module.exports = ({ config }) => {
  config = webpack(config);

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            path: './postcss.config.js',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            data: `
              @import "client/static/sass/global";
            `,
          },
        },
      ],
    },
  );

  return config;
};
