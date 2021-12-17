const AppError = require('../managers/app-error');

module.exports = class GamingController {
  /** @type {import('express').RequestHandler} */
  static bets = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static sport_bets = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static selection2market = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static markets = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static matches = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static participants = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static regions = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static selections = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static tournaments = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }
};
