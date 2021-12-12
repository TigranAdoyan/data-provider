const AppError = require('../managers/app-error');
const DB = require('../managers/db');

module.exports = class ClientController {
  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static clients = async (req, res, next) => {
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
   static activity_feed = async (req, res, next) => {
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
   static balance_log = async (req, res, next) => {
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
   static labels = async (req, res, next) => {
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
   static limits = async (req, res, next) => {
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
