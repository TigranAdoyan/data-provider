const ResponseManager = require('../managers/response');

/**
 * @type {import("express").RequestHandler}
 */
module.exports = (req, res, next) => {
  res.success = ResponseManager.success(res);
  res.error = ResponseManager.error(res);
  next();
};
