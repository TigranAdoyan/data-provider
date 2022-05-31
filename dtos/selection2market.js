/**
 * @typedef {import('../types').db.Fm_pre_price_type_prefixed} Fm_pre_price_type_prefixed
 * @typedef {import('../types').db.Fm_pre_market_type_prefixed} Fm_pre_market_type_prefixed
 */

/**
 * @param {Fm_pre_price_type_prefixed & Fm_pre_market_type_prefixed} fpptmt
 */
module.exports = (fpptmt) => {
  return {
    id:           '',
    selection_id: fpptmt.fm_pre_price_type_id,
    market_id:    fpptmt.fm_pre_market_type_id
  };
};
