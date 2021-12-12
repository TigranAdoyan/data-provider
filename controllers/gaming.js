const AppError = require('../managers/app-error');

module.exports = class GamingController {
  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static bets = async (req, res, next) => {
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
  static sport_bets = async (req, res, next) => {
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
  static selection2market = async (req, res, next) => {
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
  static markets = async (req, res, next) => {
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
  static matches = async (req, res, next) => {
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
  static participants = async (req, res, next) => {
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
  static regions = async (req, res, next) => {
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
  static selections = async (req, res, next) => {
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
  static tournaments = async (req, res, next) => {
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
