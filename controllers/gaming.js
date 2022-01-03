const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { sport_bets } = require('../dtos');

module.exports = class GamingController {
  /** @type {import('express').RequestHandler} */
  static bets = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler<, , {from:string,to:string}>} */
  static sport_bets = async (req, res, next) => {
    try {
      const s_bets = await DB.project(req.project).getSportBetsByRange(new Date(req.body.from), new Date(req.body.to));
      res.stream(s_bets, s_bet => sport_bets(s_bet, s_bet));
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
