const { Router } = require("express");
const { paginator } = require('../../../helpers/validators');
const validationResult = require('../../../middlewares/validator');
const ClientController = require('../../../controllers/client');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/activity_feed', ClientController.activity_feed);
  router.get('/labels', ClientController.labels);
  router.get('/limits', ClientController.limits);
  router.get('/',
    paginator,
    validationResult,
    ClientController.clients
  );

  parentRouter.use('/client', router);
};
