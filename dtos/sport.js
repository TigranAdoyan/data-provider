const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_sport',
  column: 'id'
}, {
  name: 'name',
  table: 'fm_pre_sport',
  column: 'sport_name'
}, {
  name: 'priority',
  table: 'fm_pre_sport',
  column: 'priority'
}], {
  postProcess(result, fps) {
    return Object.assign(result, {
      id:       fps.id,
      name:     fps.sport_name,
      priority: fps.priority
    });
  }
});
