const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./client/_router')(router);
  require('./gaming/_router')(router);
  require('./operator/_router')(router);
  require('./payments/_router')(router);

  parentRouter.use('/operator', router); 
};
