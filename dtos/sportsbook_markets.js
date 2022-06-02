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
  column: 'sport_name'
}], {
  postProcess(result, fpmts) {
    return Object.assign(result, {
      id: fpmts.fm_pre_market_type_id,
      name: fpmts.fm_pre_market_type_market_type_name,
      sport: fpmts.fm_pre_sport_sport_name
    });
  }
});
