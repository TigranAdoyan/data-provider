const AppError = require('../managers/app-error');
const DB = require('../managers/db');

const { currencies, payment_transactions } = require('../dtos');

module.exports = class PaymentsController {
  /** @type {import('express').RequestHandler<, , {from:string,to:string}>} */
  static transactions = async (req, res, next) => {
    try {
      const trs = await DB.project(req.project).getTransactionsByRange(new Date(req.body.from), new Date(req.body.to));
      res.stream(trs, tr => payment_transactions(tr, _projects.projectConf(req.project), {}));
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
