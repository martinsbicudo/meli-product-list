const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const createNextApp = require('./create-next-app');

const app = express();
const router = express.Router();

app
  .use(bodyParser())
  .use(bodyParser.urlencoded({
    extended: false,
  }))
  .use('/api', routes(router));

createNextApp(app);
