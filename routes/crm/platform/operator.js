const { Router } = require("express");
const OperatorController = require('../../../controllers/operator');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.get('/info', OperatorController.infoP);

  parentRouter.use('/operator', router);
};
