const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { clients } = require('../dtos');

module.exports = class ClientController {
  /** @type {import('express').RequestHandler} */
  static clients = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);

      // if (isArray(req.body.usersId)) {
      //   const users = await DB.project(req.project).getUsersById(req.body.usersId);
      //   return res.success.data(users.map(user => clients(user, operatorInfo))).end();
      // }

      const user = await DB.project(req.project).getUserById(req.query.usersId);
      return res.success.data(clients(user, operatorInfo)).end();
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
