const path = require('path');

module.exports = {
  /* istanbul ignore next */
  process(src, filename) {
    return `module.exports=${JSON.stringify(path.basename(filename))};`;
  },
};
