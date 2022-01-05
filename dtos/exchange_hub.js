/**
 * @param {import("../types").db.Xrate} xrate 
 * @param {import("../types").db.Operator} operatorInfo
 */
module.exports = (xrate, operatorInfo) => {
  return {
    id:           xrate.id,
    in_currency:  'USD',
    out_currency: xrate.currency,
    rate:         xrate.rate,
    created_at:   xrate.created_at,
    actual_at:    xrate.updated_at,
    operator_id:  operatorInfo.project || '',
    source:       'fixer'
  };
};
