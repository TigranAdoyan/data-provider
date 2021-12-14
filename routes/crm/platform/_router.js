const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./gaming')(router);
  require('./operator')(router);
  require('./payments')(router);

  parentRouter.use('/platform', router);
};
