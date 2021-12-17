const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { currencies } = require('../dtos');

module.exports = class PaymentsController {
  /** @type {import('express').RequestHandler} */
  static transactions = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static currencies = async (req, res, next) => {
    try {
      const currenciesSet = new Set();
      const currenciesArr = [];
      _projects.headers.forEach(operatorInfo => {
        if (!currenciesSet.has(operatorInfo.currency)) {
          currenciesSet.add(operatorInfo.currency);
          currenciesArr.push(currencies(operatorInfo));
        }
      });
      return res.success.data(currenciesArr).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static exchange = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').end();
    } catch (e) {
      next(e);
    }
  }
};
