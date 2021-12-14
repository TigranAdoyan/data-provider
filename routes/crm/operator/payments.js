const { Router } = require("express");
const PaymentsController = require('../../../controllers/payments');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/transactions', PaymentsController.transactions);

  parentRouter.use('/payments', router);
};
