const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./currencies')(router);
  require('./exchange_hub')(router);

  parentRouter.use('/payments', router); 
};
