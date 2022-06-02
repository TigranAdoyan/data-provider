const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'selection_id',
  table: 'fm_pre_price_type',
  column: 'id',
}, {
  name: 'market_id',
  table: 'fm_pre_market_type',
  column: 'id',
}], {
  postProcess(result, fpptmt) {
    return Object.assign(result, {
      id:           '',
      selection_id: fpptmt.fm_pre_price_type_id,
      market_id:    fpptmt.fm_pre_market_type_id
    });
  }
});
