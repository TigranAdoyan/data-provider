require('dotenv').config({ path: __dirname + '/.env' });
const routeFinder = require('./helpers/route-finder');

global._ = require('underscore');
global._configs = require('./helpers/configs');
global._projects = require('./helpers/projects')();

const knex = require('knex')(_configs.db.mysql);
const logger = require('./middlewares/logger');
const response = require('./middlewares/response');
const errorHandler = require('./middlewares/error-handler');
const router = require('./routes/router');
const grpcServer = require('./grpc/index');

const express = require('express');
const app = express();

_projects.init(knex, async (result, err) => {
  if (err) throw err;

  app.listen(process.env.PORT, () => {
    console.log('Listening on PORT =>', process.env.PORT);

  });

  await grpcServer.listen(process.env.GRPC_PORT);

  if (process.env.NODE_ENV !== 'production') app.use(logger);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(response);
  router(app);
  app.use(errorHandler);

  if (process.env.NODE_ENV !== 'production') {
    await routeFinder(app, './configs');
  }
});
