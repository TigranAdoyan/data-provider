const { Router } = require('express');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  /**
   * Routes
   */
  require('./abstract2tag')(router);
  require('./operator_bonuses')(router);
  require('./operator_category')(router);
  require('./operator_games')(router);
  require('./operator_info')(router);
  require('./operator_providers')(router);
  require('./participant2operator')(router);
  require('./region2operator')(router);
  require('./tournament2operator')(router);

  parentRouter.use('/operator', router); 
};
