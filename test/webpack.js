const aliases = require('../conf/webpack/aliases');

module.exports = {
  resolve: {
    alias: aliases,
    extensions: ['.js', '.scss'],
  },
};
