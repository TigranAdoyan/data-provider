const AppError = require('../modules/app-error');
const DB = require('../managers/db');

const {
  operator_info,
  operator_providers,
  operator_games,
  region2operator,
  operator_category
} = require('../dtos');

module.exports = class OperatorController {
  /** @type {import('express').RequestHandler} */
  static abstract2tag = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static bonuses = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static category = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const categories = await DB.project(req.project).getCasinoCategories(
        req.query.page,
        req.query.limit,
        // req.query.where ? JSON.parse(req.query.where) : null
      );

      res.success.data({
        ...categories,
        data: categories.data.map(category => operator_category.process(operatorInfo, category))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static games = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const games_casino = await DB.project(req.project).getGamesCasino(
        req.query.page,
        req.query.limit,
        req.query.where
      );

      res.success.data({
        ...games_casino,
        data: games_casino.data.map(game_casino => operator_games.process(game_casino, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static infoO = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      return res.success.data(operator_info.process(operatorInfo)).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static providers = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const games_casino = await DB.project(req.project).getCasinoProviders(
        req.query.page,
        req.query.limit,
        req.query.where
      );

      res.success.data({
        ...games_casino,
        data: games_casino.data.map(game_casino => operator_providers.process(game_casino, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static participant2operator = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static region2operator = async (req, res, next) => {
    try {
      const data = await DB.region2operator(req.project);
      return res.success.data(region2operator.process(data)).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static tournament2operator = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static infoP = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static list = async (req, res, next) => {
    try {
      res.success.data(_projects.getNames()).end();
    } catch (e) {
      next(e);
    }
  }
};
