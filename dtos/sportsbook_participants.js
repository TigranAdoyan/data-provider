const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_team',
  column: 'id',
}, {
  name: 'name',
  table: 'fm_pre_team',
  column: 'team_name',
}, {
  name: 'sport',
  table: 'fm_pre_sport',
  column: 'sport_name',
}], {
  postProcess(result, fpts) {
    return Object.assign(result, {
      id:         fpts.fm_pre_team_id,
      name:       fpts.fm_pre_team_team_name,
      short_name: '',
      sport:      fpts.fm_pre_sport_sport_name
    });
  }
});
