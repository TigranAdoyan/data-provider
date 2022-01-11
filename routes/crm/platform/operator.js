const { Router } = require("express");
const OperatorController = require('../../../controllers/operator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/info', OperatorController.infoP);
  router.get('/list', OperatorController.list);

  parentRouter.use('/operator', router);
};
