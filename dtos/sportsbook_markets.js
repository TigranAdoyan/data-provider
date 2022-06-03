const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_market_type',
  column: 'id'
}, {
  name: 'name',
  table: 'fm_pre_market_type',
  column: 'market_type_name'
}, {
  name: 'sport',
  table: 'fm_pre_sport',
  column: 'id'
}], {
  /** @param {import('../types/db').Fm_pre_market_type_prefixed & import('../types/db').Fm_pre_sport_prefixed} fpmts */
  postProcess(result, fpmts) {
    return Object.assign(result, {
      id: fpmts.fm_pre_market_type_id,
      name: fpmts.fm_pre_market_type_market_type_name,
      sport_id: fpmts.fm_pre_sport_id
    });
  }
});
