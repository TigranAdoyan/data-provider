const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'xrate',
  column: 'id'
}, {
  name: 'out_currency',
  table: 'xrate',
  column: 'currency'
}, {
  name: 'rate',
  table: 'xrate',
  column: 'rate'
}, {
  name: 'created_at',
  table: 'xrate',
  column: 'created_at'
}, {
  name: 'actual_at',
  table: 'xrate',
  column: 'updated_at'
}], {
  postProcess(result, xrate, operatorInfo) {
    return Object.assign(result, {
      id:           xrate.id,
      in_currency:  'USD',
      out_currency: xrate.currency,
      rate:         xrate.rate,
      created_at:   xrate.created_at,
      actual_at:    xrate.updated_at,
      operator_id:  operatorInfo.project || '',
      source:       'fixer'
    });
  }
});

