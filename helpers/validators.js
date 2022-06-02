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
   * @param {{
   *  field: string,
   *  allowedKeys: string[]
   * }} options 
   * @returns 
   */
  fieldKeysWhitelist(options) {
    const validatorsArr = [
      query(options.field).custom(value => {
        if (!value) return true;

        try {
          JSON.parse(value);
          return true;
        } catch (e) {
          return false;
        }
      }).withMessage(`Invalid json`),

      query(options.field).custom(value => {
        if (!value) return true;

        const parsed = JSON.parse(value);
        for (const key in parsed) {
          if (!options.allowedKeys.includes(key)) {
            validatorsArr[1].withMessage(`invalid key "${key}", allowed ${options.allowedKeys.join(', ')}`);
            return false;
          }
        }
        return true;
      })
    ];

    return validatorsArr;
  },

  /** 
   * @template T
   * @type {import('../types').ConditionValidator<T>}
   */
  conditionValidator(options) {
    options = Object.assign({
      allowedOperators,
      valueValidator: () => true
    }, options);

    const validatorsArr = [
      query(options.field).custom(value => {
        if (!value) return true;

        try {
          JSON.parse(value);
          return true;
        } catch (e) {
          validatorsArr[0].withMessage(`Invalid json for "${options.field}"`);
          return false;
        }
      }),

      query(options.field).custom((value) => {
        if (!value) return true;

        const parsed = JSON.parse(value);
        if (!parsed[options.key]) return true;
        if (options.allowedOperators.includes(parsed[options.key].operator)) {
          return true;
        }

        validatorsArr[1].withMessage(`invalid operator, allowed ${options.allowedOperators.join(', ')}`);
        return false;
      }),

      query(options.field).custom((value) => {
        if (!value) return true;

        const parsed = JSON.parse(value);
        if (!parsed[options.key]) return true;
        if (options.valueValidator(parsed[options.key].value)) {
          return true;
        }

        validatorsArr[2].withMessage(`invalid value for "${options.field}"."${options.key}" => ${parsed[options.key].value}`);
        return false;
      })
    ];

    return validatorsArr;
  }
};
