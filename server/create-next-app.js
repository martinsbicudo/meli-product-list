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

module.exports = (app, Logger) => {
  nextApp.prepare().then(() => app.get('*', (req, res) => handle(req, res)));

  const server = http.createServer(app)
    .listen(SERVER_PORT);

  server.on('error', onChangeBlur);

  Logger.info(`> Server ready on port ${SERVER_PORT}`);
};
