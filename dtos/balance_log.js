const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'log_balance',
  column: 'id'
}, {
  name: 'client_id',
  table: 'log_balance',
  column: 'user_id'
}, {
  name: 'balance_before',
  table: 'log_balance',
  column: 'balance_old_value'
}, {
  name: 'balance_after',
  table: 'log_balance',
  column: 'balance_new_value'
}, {
  name: 'source',
  table: 'log_balance',
  column: 'source'
}, {
  name: 'created_at',
  table: 'log_balance',
  column: 'created'
}], {
  postProcess(result, log_balance, operatorInfo) {
    return Object.assign(result, {
      id:             log_balance.id,
      client_id:      log_balance.user_id,
      operator_id:    operatorInfo.project,
      balance_before: log_balance.balance_old_value,
      balance_after:  log_balance.balance_new_value,
      source:         '',
      created_at:     log_balance.created
    });
  }
});
