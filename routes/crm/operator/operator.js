const { Router } = require("express");
const { paginator, fieldKeysWhitelist, conditionValidator } = require('../../../helpers/validators');
const validationResult = require('../../../middlewares/validator');
const OperatorController = require('../../../controllers/operator');
const { operator_providers, operator_games } = require("../../../dtos");
const { setRealKeys } = require("../../../middlewares/conditional-request");

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/abstract2tag', OperatorController.abstract2tag);

  router.get('/bonuses', OperatorController.bonuses);

  router.get('/category', 
    paginator,
    // fieldKeysWhitelist({
    //   field: 'where',
    //   allowedKeys: ['id']
    // }),
    // conditionValidator({
    //   field: 'where',
    //   key: 'id',
    //   allowedOperators: ['=', '>', '<', '>=', '<='],
    //   /** @param {number} idValue */
    //   valueValidator: idValue => parseInt(idValue) && idValue > 0,
    // }),
    validationResult,
    OperatorController.category
  );

  router.get('/games',
    paginator,
    fieldKeysWhitelist({
      field: 'where',
      allowedKeys: ['id']
    }),
    conditionValidator({
      field: 'where',
      key: 'id',
      allowedOperators: ['=', '>', '<', '>=', '<='],
      /** @param {number} idValue */
      valueValidator: idValue => parseInt(idValue) && idValue > 0,
    }),
    validationResult,
    setRealKeys('query', 'where', operator_games),
    OperatorController.games
  );

  router.get('/info', OperatorController.infoO);

  router.get('/providers',
    paginator,
    fieldKeysWhitelist({
      field: 'where',
      allowedKeys: ['id']
    }),
    conditionValidator({
      field: 'where',
      key: 'id',
      allowedOperators: ['=', '>', '<', '>=', '<='],
      /** @param {number} idValue */
      valueValidator: idValue => parseInt(idValue) && idValue > 0,
    }),
    validationResult,
    setRealKeys('query', 'where', operator_providers),
    OperatorController.providers
  );

  router.get('/participant2operator', OperatorController.participant2operator);

  router.get('/region2operator', OperatorController.region2operator);

  router.get('/tournament2operator', OperatorController.tournament2operator);

  parentRouter.use('/operator', router);
};
