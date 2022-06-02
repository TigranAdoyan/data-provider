const AppError = require('../modules/app-error');
const DB = require('../managers/db');

const { currencies, payment_transactions, exchange_hub, balance_log } = require('../dtos');

module.exports = class PaymentsController {
  /** @type {import('express').RequestHandler<, , {from:string,to:string}>} */
  static transactions = async (req, res, next) => {
    try {
      // const trs = await DB.project(req.project).getTransactionsByRange(new Date(req.body.from), new Date(req.body.to));
      // res.stream(trs, tr => payment_transactions(tr, _projects.projectConf(req.project), {}));
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static currencies = async (req, res, next) => {
    try {
      const currenciesArr = await DB.selectCurrencies();
      return res.success.data(currenciesArr.map(currencies.process)).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static exchange = async (req, res, next) => {
    try {
      const currenciesArr = await DB.selectCurrencies();
      return res.success.data(currenciesArr.map(curr => {
        for (const op of _projects.headers) {
          if (op.currency === curr.currency) return exchange_hub.process(curr, op);
        }
        return exchange_hub.process(curr, {});
      })).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static balance_log = async (req, res, next) => {
    try {
      const operatorInfo = _projects.projectConf(req.project);
      const logs = await DB.project(req.project).getBalanceLog(
        new Date(req.query.from),
        new Date(req.query.to),
        req.query.page,
        req.query.limit
      );
      return res.success.data({
        ...logs,
        data: logs.data.map(log => balance_log.process(log, operatorInfo))
      }).end();
    } catch (e) {
      next(e);
    }
  }
};
