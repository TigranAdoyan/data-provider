const { Router } = require("express");
const PaymentsController = require('../../../controllers/payments');
const { interval } = require("../../../helpers/validators");
const validationResult = require('../../../middlewares/validator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/transactions', PaymentsController.transactions);
  router.get('/balance_log',
    interval(3600000, 'from', 'to'),
    validationResult,
    PaymentsController.balance_log
  );

  parentRouter.use('/payments', router);
};
