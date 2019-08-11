const next = require('next');
const http = require('http');
const { IS_PROD, SERVER_PORT } = require('../conf/constants');

const nextApp = next({
  dir: './client',
  dev: !IS_PROD,
});
const handle = nextApp.getRequestHandler();
const onChangeBlur = (error) => {
  throw error;
};

module.exports = (app) => {
  nextApp.prepare().then(() => app.get('*', (req, res) => handle(req, res)));

  http.createServer(app)
    .listen(SERVER_PORT)
    .on('error', onChangeBlur);
  console.log(`> Server ready on port ${SERVER_PORT}`); // eslint-disable-line
};
