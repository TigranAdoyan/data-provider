/**
 * @typedef {import('../types/db').Fm_pre_team_prefixed} Team
 * @typedef {import('../types/db').Fm_pre_sport_prefixed} Sport
 */

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
  name: 'sport_id',
  table: 'fm_pre_sport',
  column: 'id',
}], {
  /** @param {Team & Sport} fpts */
  postProcess(result, fpts) {
    return Object.assign(result, {
      id:         fpts.fm_pre_team_id,
      name:       fpts.fm_pre_team_team_name,
      short_name: '',
      sport_id:   fpts.fm_pre_sport_id
    });
  }
});
