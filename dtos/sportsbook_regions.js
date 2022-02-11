/**
 * @typedef {import("../types").db.Fm_pre_country} Fm_pre_country
 */

/**
 * @param {Fm_pre_country} fpc
 */
module.exports = (fpc) => {
  return {
    id: fpc.id,
    name: fpc.title
  };
};
