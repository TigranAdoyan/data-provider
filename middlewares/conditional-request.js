const AppError = require('../modules/app-error');
const DTO = require('../modules/dto');

module.exports = {
  /**
   * @param {'params' | 'query' | 'body'} location 
   * @param {string} field 
   * @param {DTO} dto 
   * @param {(target: string) => string} realNameGetter 
   */
  setRealKeys(location, field, dto) {
    /** @type {import('express').RequestHandler} */
    return (req, res, next) => {
      if (!req[location][field]) {
        req[location][field] = null;
        return next();
      }

      /** @type {import('../types').WhereStructure} */
      let obj = null;
      try {
        obj = JSON.parse(req[location][field]);
      } catch (e) {
        return next(new AppError(`invalid json at req.query.${field} => ${req.query[field]}`, 400));
      }

      for (const key in obj) {
        obj[key] = {...obj[key], ...dto.getField(key)}
      }

      req[location][field] = obj;
      return next();
    };
  }
};
