/**
 * @typedef {import('../types').db.Fk_operator_region_prefixed} Fk_operator_region_prefixed
 * @typedef {import('../types').db.Operator_prefixed} Operator_prefixed
 */

/**
 * @param {Fk_operator_region_prefixed & Operator_prefixed} r2o
 */
module.exports = (r2o) => {
  return {
    id:           r2o.fk_operator_region_id,
    region_id:    r2o.fk_operator_region_region_id,
    operator_id:  r2o.operators_id,
    ranking:      r2o.operators_ranking,
    status:       r2o.operators_status
  };
};
