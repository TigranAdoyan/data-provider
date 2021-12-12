const { Router } = require("express");
const GamingController = require('../../../controllers/gaming');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/bets', GamingController.bets);
  router.get('/sport_bets', GamingController.sport_bets);

  parentRouter.use('/gaming', router);
};
