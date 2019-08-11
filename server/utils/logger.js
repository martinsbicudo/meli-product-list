const bunyan = require('bunyan');
const PrettyStream = require('bunyan-pretty-colors');

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

module.exports = (name) => bunyan.createLogger({
  name,
  streams: [{
    level: 'debug',
    type: 'raw',
    stream: prettyStdOut,
  }],
});
