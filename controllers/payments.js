const AppError = require('../managers/app-error');

module.exports = class PaymentsController {
  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static transactions = async (req, res, next) => {
    try {
      res.json({
        error: true,
        message: 'Not implemented'
      });
    } catch (e) {
      console.log('request error =>', e.message);
      next(e);
    }
  }

  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static currencies = async (req, res, next) => {
    try {
      res.json({
        error: true,
        message: 'Not implemented'
      });
    } catch (e) {
      console.log('request error =>', e.message);
      next(e);
    }
  }

  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static exchange = async (req, res, next) => {
    try {
      res.json({
        error: true,
        message: 'Not implemented'
      });
    } catch (e) {
      console.log('request error =>', e.message);
      next(e);
    }
  }
};
