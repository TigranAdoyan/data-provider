const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { operator_info, operator_providers, operator_games } = require('../dtos');

module.exports = class OperatorController {
  /** @type {import('express').RequestHandler} */
  static abstract2tag = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static bonuses = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static category = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static games = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const games_casino = await DB.project(req.project).getGamesCasino(req.query.page, req.query.limit);

      res.success.data({
        ...games_casino,
        data: games_casino.data.map(game_casino => operator_games(game_casino, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static infoO = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      return res.success.data(operator_info(operatorInfo)).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static providers = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const games_casino = await DB.project(req.project).getGamesCasino(req.query.page, req.query.limit);

      res.success.data({
        ...games_casino,
        data: games_casino.data.map(game_casino => operator_providers(game_casino, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static participant2operator = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static region2operator = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static tournament2operator = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static infoP = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }
};
