const AppError = require('../managers/app-error');

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
      const operators = [];
      _projects.headers.forEach(operatorInfo => {
        if (!currenciesSet.has(operatorInfo.currency)) {
          currenciesSet.add(operatorInfo.currency);
          operators.push(currencies(operatorInfo));
        }
      });
      return res.success.data([...operators]).end();
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
