const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { clients } = require('../dtos');

module.exports = class ClientController {
  /** @type {import('express').RequestHandler} */
  static clients = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const users = await DB.project(req.project).getUsers(req.query.page, req.query.limit);

      return res.success.data({
        ...users,
        data: users.data.map(user => clients(user, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static activity_feed = async (req, res, next) => {
    try {
      
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static balance_log = async (req, res, next) => {
    try {
      
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static labels = async (req, res, next) => {
    try {
      
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static limits = async (req, res, next) => {
    try {
      
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }
};
