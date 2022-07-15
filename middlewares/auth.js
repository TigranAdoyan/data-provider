const { header } = require('express-validator');
const AppError = require('../modules/app-error');
const AccessManager = require('../managers/access');
const validator = require('../middlewares/validator');

module.exports = {
  /** @type {import('express').RequestHandler[]} */
  project: [
    header('project').exists().toUpperCase().isIn(_projects.getNames()).withMessage('Invalid project'),
    validator,
    async (req, res, next) => {
      try {
        req.project = req.headers.project;
        next();
      } catch (e) {
        return next(e);
      }
    }
  ],

  /** @type {import('express').RequestHandler[]} */
  access: [
    header('authorization').exists().withMessage('Access token is required'),
    validator,
    async (req, res, next) => {
      try {
        const url = new URL('http://localhost' + req.originalUrl);
        const path = url.pathname;

        if (!await AccessManager.verifyAccess(req.headers.authorization, path, req.project || null)) {
          throw new AppError('Access denied for that resource', 403);
        }

        next();
      } catch (e) {
        return next(e);
      }
    }
  ]
};
