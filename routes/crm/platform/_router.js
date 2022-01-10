const { Router } = require('express');
const { access } = require('../../../middlewares/auth');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.use(access);

  /**
   * Routes
   */
  require('./gaming')(router);
  require('./operator')(router);
  require('./payments')(router);

  parentRouter.use('/platform', router);
};
