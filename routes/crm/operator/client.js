const { Router } = require("express");
const ClientController = require('../../../controllers/client');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/activity_feed', ClientController.activity_feed);
  router.get('/balance_log', ClientController.balance_log);
  router.get('/labels', ClientController.labels);
  router.get('/limits', ClientController.limits);
  router.get('/', ClientController.clients);

  parentRouter.use('/client', router);
};
