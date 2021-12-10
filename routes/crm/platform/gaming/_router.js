const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./selection2market')(router);
  require('./sportsbook_markets')(router);
  require('./sportsbook_matches')(router);
  require('./sportsbook_participants')(router);
  require('./sportsbook_regions')(router);
  require('./sportsbook_selections')(router);
  require('./sportsbook_tournaments')(router);

  parentRouter.use('/gaming', router); 
};
