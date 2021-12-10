const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./gaming_bets')(router);
  require('./sport_bets')(router);

  parentRouter.use('/gaming', router); 
};
