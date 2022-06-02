const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fk_operator_region',
  column: 'id',
}, {
  name: 'region_id',
  table: 'fk_operator_region',
  column: 'region_id',
}, {
  name: 'operator_id',
  table: 'operators',
  column: 'id',
}, {
  name: 'ranking',
  table: 'operators',
  column: 'ranking',
}, {
  name: 'status',
  table: 'operators',
  column: 'status',
}], {
  postProcess(result, r2o) {
    return Object.assign(result, {
      id:           r2o.fk_operator_region_id,
      region_id:    r2o.fk_operator_region_region_id,
      operator_id:  r2o.operators_id,
      ranking:      r2o.operators_ranking,
      status:       r2o.operators_status
    });
  }
});
