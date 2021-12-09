require('dotenv').config({ path: __dirname + '/.env' });

global._ = require('underscore');
global._configs = require('./helpers/configs');
global._projects = require('./helpers/projects')();

const knex = require('knex')(_configs.db.mysql);
const errorHandler = require('./middlewares/error-handler');
const router = require('./routes/router');

const express = require('express');
const app = express();

_projects.init(knex, async (result, err) => {
  if (err) throw err;

  app.listen(process.env.PORT, () => {
    console.log('Listening on PORT =>', process.env.PORT);
  });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  router(app);
  app.use(errorHandler);
});
