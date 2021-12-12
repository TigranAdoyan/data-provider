const { Router } = require("express");
const GamingController = require('../../../controllers/gaming');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/selection2market', GamingController.selection2market);
  router.get('/markets', GamingController.markets);
  router.get('/matches', GamingController.matches);
  router.get('/participants', GamingController.participants);
  router.get('/regions', GamingController.regions);
  router.get('/selections', GamingController.selections);
  router.get('/tournaments', GamingController.tournaments);

  parentRouter.use('/gaming', router);
};
