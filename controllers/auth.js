const AppError = require('../modules/app-error');
const TokenManager = require('../managers/token');

module.exports = class ClientController {
  /** @type {import('express').RequestHandler} */
  static auth = async (req, res, next) => {
    try {
      const token = await TokenManager.authToken(req.body.username, req.body.password);
      if (!token) throw new AppError('Wrong username/password', 403);
      res.success.msg('Authorized').data({token}).end();
    } catch (e) {
      next(e);
    }
  }
};
