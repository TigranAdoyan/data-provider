const { query } = require('express-validator');

const allowedOperators = ['=', '>', '<', '>=', '<='];

module.exports = {
  paginator: [
    query('page').custom(value => {
      if (!value) return true;
      value = Number(value);
      if (value !== parseInt(value)) return false;
      return Boolean(value && value > 0);
    }).withMessage("invalid 'page' value"),

    query('limit').custom(value => {
      if (!value) return true;
      value = Number(value);
      if (value !== parseInt(value)) return false;
      return Boolean(value && value > 0);
    }).withMessage("invalid 'limit' value")
  ],

  /**
   * @param {number} milliseconds 
   * @param {string} fromField 
   * @param {string} toField 
   */
  interval(milliseconds, fromField, toField) {
    return [
      query(fromField).custom(value => {
        return new Date(value) != 'Invalid Date';
      }),
      query(toField).custom(value => {
        return new Date(value) != 'Invalid Date';
      }),
      query(toField).custom((value, meta) => {
        const from = new Date(meta.req.query.from).getTime();
        const to = new Date(meta.req.query.to).getTime();
        return Boolean((to - from) <= milliseconds);
      }).withMessage('Too big range')
    ]
  },

  /** 
   * @param {string} field 
   * @param {(value: any) => boolean} operatorValueValidator 
   */
  operatorValidator(field, operatorValueValidator) {
    return [
      query(field).custom(value => {
        if (!value) return true;

        try {
          const parsed = JSON.parse(value);
          return allowedOperators.includes(parsed.operator);
        } catch (e) {
          return false;
        }
      }).withMessage('invalid operator, allowed (' + allowedOperators.join(', ') + ')'),

      query(field).custom(value => {
        if (!value) return true;

        try {
          const parsed = JSON.parse(value);
          return operatorValueValidator(parsed.value);
        } catch (e) {
          return false;
        }
      })
    ]
  }
};
