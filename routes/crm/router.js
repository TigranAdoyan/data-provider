const { Router } = require('express');
const { access } = require('../../middlewares/auth');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.use(access);

  /**
   * Routes
   */
  require('./operator/_router')(router);
  require('./platform/_router')(router);

  parentRouter.use('/crm', router);
};
