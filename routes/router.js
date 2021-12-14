const { Router } = require('express');

const crm = Router();
const auth = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./crm/router')(crm);
  require('./auth/_router')(auth);

  parentRouter.use('/api', crm);
  parentRouter.use('/api', auth);
};
