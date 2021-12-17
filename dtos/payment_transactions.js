/**
 * @param {import("../types").db.Transaction} transaction 
 * @param {import("../types").db.Operator} operatorInfo 
 * @param {*} balance_log 
 */
module.exports = (transaction, operatorInfo, balance_log) => {
  return {
    id: transaction.id,
    transaction_id: transaction.id,
    operator_id: operatorInfo.id,
    client_id: transaction.user_id,
    amount: transaction.amount,
    currency: transaction.currency,
    amount_main_currency: transaction.amount,
    main_currency: transaction.currency,
    type: transaction.op_type.split('-')[0],
    channel: '',                                       // ?
    binding: operatorInfo.binding,                                       // ?
    balance_log_id: balance_log.id,                                // ?
    payment_method: transaction.op_type.split('-').slice(1).join('-')
  };
};
