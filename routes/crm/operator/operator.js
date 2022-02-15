const { Router } = require("express");
const { paginator } = require('../../../helpers/validators');
const validationResult = require('../../../middlewares/validator');
const OperatorController = require('../../../controllers/operator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/abstract2tag', OperatorController.abstract2tag);
  router.get('/bonuses', OperatorController.bonuses);
  router.get('/category', OperatorController.category);
  router.get('/games',
    paginator,
    validationResult,
    OperatorController.games
  );
  router.get('/info', OperatorController.infoO);
  router.get('/providers',
    paginator,
    validationResult,
    OperatorController.providers
  );
  router.get('/participant2operator', OperatorController.participant2operator);
  router.get('/region2operator', OperatorController.region2operator);
  router.get('/tournament2operator', OperatorController.tournament2operator);

  parentRouter.use('/operator', router);
};
