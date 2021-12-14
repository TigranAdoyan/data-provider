const { Router } = require('express');
const { project } = require('../../../middlewares/auth');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.use(project);

  /**
   * Routes
   */
  require('./client')(router);
  require('./gaming')(router);
  require('./operator')(router);
  require('./payments')(router);

  parentRouter.use('/operator', router);
};
