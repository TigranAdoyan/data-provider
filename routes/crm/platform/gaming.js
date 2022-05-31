const { Router } = require("express");
const GamingController = require('../../../controllers/gaming');
const { paginator } = require('../../../helpers/validators');
const validationResult = require('../../../middlewares/validator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/selection2market', GamingController.selection2market);
  router.get('/markets',
    paginator,
    validationResult,
    GamingController.markets
  );
  router.get('/matches',
    paginator,
    validationResult,
    GamingController.matches
  );
  router.get('/participants',
    paginator,
    validationResult,
    GamingController.participants
  );
  router.get('/regions', GamingController.regions);
  router.get('/selections',
    paginator,
    validationResult,
    GamingController.selections
  );
  router.get('/tournaments',
    paginator,
    validationResult,
    GamingController.tournaments
  );
  router.get('/sports', GamingController.sports);

  parentRouter.use('/gaming', router);
};
