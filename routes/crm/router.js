const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./operator/_router')(router);
  require('./platform/_router')(router);

  parentRouter.use('/crm', router);
};
