/**
 * @typedef {import('../types/db').Fm_pre_price_type_prefixed} PriceType
 * @typedef {import('../types/db').Fm_pre_sport_prefixed} Sport
 */

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_price_type',
  column: 'id'
}, {
  name: 'name',
  table: 'fm_pre_price_type',
  column: 'price_type_name'
}, {
  name: 'sport_id',
  table: 'fm_pre_sport',
  column: 'id'
}], {
  /** @param {PriceType & Sport} fpptmt */
  postProcess(result, fpptmt) {
    return Object.assign(result, {
      id:       fpptmt.fm_pre_price_type_id,
      name:     fpptmt.fm_pre_price_type_price_type_name,
      sport_id: fpptmt.fm_pre_sport_id
    });
  }
});
