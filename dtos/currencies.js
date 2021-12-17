/**
 * @param {import("../types").db.Operator} operatorInfo 
 */
module.exports = (operatorInfo) => {
  return {
    id: operatorInfo.id,
    code: operatorInfo.currency
  };
};
