const { Router } = require("express");
const GamingController = require('../../../controllers/gaming');
const { sportsbook_markets, sportsbook_matches, sportsbook_participants, sportsbook_tournaments, sportsbook_regions, sportsbook_selections } = require("../../../dtos");
const { paginator, fieldKeysWhitelist, conditionValidator } = require('../../../helpers/validators');
const { setRealKeys } = require("../../../middlewares/conditional-request");
const validationResult = require('../../../middlewares/validator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/selection2market', GamingController.selection2market);

  router.get('/markets',
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
    setRealKeys('query', 'where', sportsbook_markets),
    GamingController.markets
  );

  router.get('/matches',
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
    setRealKeys('query', 'where', sportsbook_matches),
    GamingController.matches
  );

  router.get('/participants',
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
    setRealKeys('query', 'where', sportsbook_participants),
    GamingController.participants
  );

  router.get('/regions', GamingController.regions);

  router.get('/selections',
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
    setRealKeys('query', 'where', sportsbook_selections),
    GamingController.selections
  );

  router.get('/tournaments',
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
    setRealKeys('query', 'where', sportsbook_tournaments),
    GamingController.tournaments
  );

  router.get('/sports', GamingController.sports);

  parentRouter.use('/gaming', router);
};
