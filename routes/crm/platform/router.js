const { Router } = require('express');

const router = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./gaming/_router')(router);
  require('./operator/_router')(router);
  require('./payments/_router')(router);

  parentRouter.use('/platform', router); 
};
