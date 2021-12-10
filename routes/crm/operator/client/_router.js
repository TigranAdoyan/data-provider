const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./activity_feed')(router);
  require('./balance_log')(router);
  require('./client_labels')(router);
  require('./client_limits')(router);
  require('./clients')(router);

  parentRouter.use('/clients', router); 
};
