const { Router } = require('express');

const router = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./operator/router')(router);
  require('./platform/router')(router);

  parentRouter.use('/crm', router); 
};
