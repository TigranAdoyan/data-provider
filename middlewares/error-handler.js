const AppError = require('../managers/app-error');

/**
 * @type {import('express').ErrorRequestHandler}
 */
module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: true,
      message: err.message,
      ...(err.errors && Object.keys(err.errors).length > 0 ? {errors: err.errors} : {})
    }).end();
  }

  return res.status(500).json({
    error: true,
    message: 'Unknown error \n' + err.message
  });
};
