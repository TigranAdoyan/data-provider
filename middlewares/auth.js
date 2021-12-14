const { header } = require('express-validator');
const AppError = require('../managers/app-error');
const TokenManager = require('../managers/token');
const validator = require('../middlewares/validator');

module.exports = {
  /** @type {import('express').RequestHandler[]} */
  project: [
    header('authorization').exists().withMessage('Access token is required'),
    header('project').exists().toUpperCase().isIn(_projects.getNames()).withMessage('Invalid project'),
    validator,
    async (req, res, next) => {
      try {
        if (!await TokenManager.verifyProject(req.headers.authorization, req.headers.project)) {
          throw new AppError(`Access denied for project ${req.headers.project}`, 403);
        }

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

        if (!await TokenManager.verifyAccess(req.headers.authorization, path)) {
          throw new AppError('Access denied for that resource', 403);
        }

        next();
      } catch (e) {
        return next(e);
      }
    }
  ]
};
