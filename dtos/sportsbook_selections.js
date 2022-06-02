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
  name: 'sport',
  table: 'fm_pre_sport',
  column: 'sport_name'
}], {
  postProcess(result, fpptmt) {
    return Object.assign(result, {
      id:     fpptmt.fm_pre_price_type_id,
      name:   fpptmt.fm_pre_price_type_price_type_name,
      sport:  fpptmt.fm_pre_sport_sport_name
    });
  }
});
