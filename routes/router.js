const { Router } = require('express');

const crmRouter = require('express').Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./crm/router')(crmRouter);

  parentRouter.use('/api', crmRouter); 
};
