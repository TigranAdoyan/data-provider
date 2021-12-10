const { Router } = require('express');

const crm = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./crm/router')(crm);

  parentRouter.use('/api', crm); 
};
