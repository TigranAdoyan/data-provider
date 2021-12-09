const AppError = require('../managers/app-error');

/**
 * 
 * @type {import('express').RequestHandler}
 */
module.exports = (req, res, next) => {
  if (req.headers.authorization === process.env.AUTH_KEY) {
    return next();
  }

  next(new AppError('Authentication error', 401));
};
