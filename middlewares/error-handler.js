const AppError = require('../modules/app-error');

/**
 * @type {import('express').ErrorRequestHandler}
 */
module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    if (err.errors && Object.keys(err.errors).length > 0) {
      return res.status(err.statusCode).error.msg(err.message).data(err.errors).end();
    }
    return res.status(err.statusCode).error.msg(err.message).end();
  }

  console.log(err);
  return res.status(500).json({
    error: true,
    message: 'Unknown error \n' + err.message
  });
};
