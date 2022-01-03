/**
 * @param {import("../types").db.Operator} operatorInfo 
 */
module.exports = (operatorInfo) => {
  return {
    id:   operatorInfo.project,
    code: [operatorInfo.currency]
  };
};
