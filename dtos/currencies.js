/**
 * @param {import("../types").db.Xrate} xrate 
 */
module.exports = (xrate) => {
  return {
    id:   xrate.id,
    code: xrate.currency
  };
};
