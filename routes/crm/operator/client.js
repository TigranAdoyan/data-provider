const { Router } = require("express");
const { paginator, conditionValidator, fieldKeysWhitelist } = require('../../../helpers/validators');
const validationResult = require('../../../middlewares/validator');
const ClientController = require('../../../controllers/client');
const { clients } = require("../../../dtos");
const { setRealKeys } = require("../../../middlewares/conditional-request");

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/activity_feed', ClientController.activity_feed);
  router.get('/labels', ClientController.labels);
  router.get('/limits', ClientController.limits);
  router.get('/',
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
    setRealKeys('query', 'where', clients),
    ClientController.clients
  );

  parentRouter.use('/client', router);
};
