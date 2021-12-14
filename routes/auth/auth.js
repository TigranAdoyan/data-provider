const { Router } = require("express");
const {body} = require('express-validator');
const validator = require('../../middlewares/validator');
const TokenController = require('../../controllers/auth');

const router = Router();

/** @param {Router} parentRouter */
module.exports = (parentRouter) => {
  router.post('/',
    body('username').exists().withMessage('`username` is required'),
    body('password').exists().withMessage('`password` is required'),
    validator,
    TokenController.auth
  );

  parentRouter.use('/', router);
};
