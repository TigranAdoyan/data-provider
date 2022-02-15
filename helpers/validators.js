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
  ],
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
  }
};
