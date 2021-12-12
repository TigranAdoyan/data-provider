const AppError = require('../managers/app-error');

module.exports = class OperatorController {
  /**
   * @static
   * @type {import('express').RequestHandler}
   */
  static abstract2tag = async (req, res, next) => {
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
  static bonuses = async (req, res, next) => {
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
  static category = async (req, res, next) => {
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
  static games = async (req, res, next) => {
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
  static infoO = async (req, res, next) => {
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
  static providers = async (req, res, next) => {
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
  static participant2operator = async (req, res, next) => {
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
  static region2operator = async (req, res, next) => {
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
  static tournament2operator = async (req, res, next) => {
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
  static infoP = async (req, res, next) => {
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
