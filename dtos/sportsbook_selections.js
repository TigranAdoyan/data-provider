/**
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 * @typedef {import('../types').db.Fm_pre_price_type_prefixed} Fm_pre_price_type_prefixed
 */

/**
 * @param {Fm_pre_price_type_prefixed & Fm_pre_sport_prefixed} fpptmt
 */
module.exports = (fpptmt) => {
  return {
    id:     fpptmt.fm_pre_price_type_id,
    name:   fpptmt.fm_pre_price_type_price_type_name,
    sport:  fpptmt.fm_pre_sport_sport_name
  };
};
