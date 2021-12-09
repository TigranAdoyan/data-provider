const { Router } = require('express');

const router = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./operator_info')(router);

  parentRouter.use('/operator', router); 
};
