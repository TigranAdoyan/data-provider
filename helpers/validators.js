const { query } = require('express-validator');

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
  ]
};
