/**
 * @typedef {import('../types').db.Log_balance} Log_balance
 * @typedef {import('../types').db.Operator} Operator
 */

/**
 * @param {Log_balance} log_balance
 * @param {Operator} operatorInfo
 */
module.exports = (log_balance, operatorInfo) => {
  return {
    id:             log_balance.id,
    client_id:      log_balance.user_id,
    operator_id:    operatorInfo.project,
    balance_before: log_balance.balance_old_value,
    balance_after:  log_balance.balance_new_value,
    source:         '',
    created_at:     log_balance.created
  };
};
