const { Router } = require('express');

const router = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./payment_transactions')(router);

  parentRouter.use('/payments', router); 
};
