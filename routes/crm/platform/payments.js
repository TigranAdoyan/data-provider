const { Router } = require("express");
const PaymentsController = require('../../../controllers/payments');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/currencies', PaymentsController.currencies);
  router.get('/exchange', PaymentsController.exchange);

  parentRouter.use('/payments', router);
};
