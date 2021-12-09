const { validationResult } = require('express-validator');
const AppError = require('../managers/app-error');

/**
 * @type {import('express').RequestHandler}
 */
module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const err = new AppError('Validation Error', 400, errors.mapped());
  // console.log('Validation error =>', err.errors);
  next(err);
};
