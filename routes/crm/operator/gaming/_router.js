const { Router } = require('express');

const router = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./gaming_bets')(router);
  require('./sport_bets')(router);

  parentRouter.use('/gaming', router); 
};
