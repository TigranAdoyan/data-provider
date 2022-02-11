/**
 * @typedef {import('../types').db.Fm_pre_market_type_prefixed} Fm_pre_market_type_prefixed
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 */

/**
 * @param {Fm_pre_market_type_prefixed & Fm_pre_sport_prefixed} fpmts
 */
module.exports = (fpmts) => {
  return {
    id: fpmts.fm_pre_market_type_id,
    name: fpmts.fm_pre_market_type_market_type_name,
    sport: fpmts.fm_pre_sport_sport_name
  };
};
