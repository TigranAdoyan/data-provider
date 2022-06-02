/**
 * @typedef {import('../types').db.Fm_pre_competition_prefixed} Fm_pre_competition_prefixed
 * @typedef {import('../types').db.Fm_pre_country_prefixed} Fm_pre_country_prefixed
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 */

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_competition',
  column: 'id'
}, {
  name: 'name',
  table: 'fm_pre_competition',
  column: 'competition_name'
}, {
  name: 'sport',
  table: 'fm_pre_sport',
  column: 'sport_name'
}, {
  name: 'region',
  table: 'fm_pre_country',
  column: 'title'
}], {
  postProcess(result, fp_ccs) {
    return Object.assign(result, {
      id:     fp_ccs.fm_pre_competition_id,
      name:   fp_ccs.fm_pre_competition_competition_name,
      sport:  fp_ccs.fm_pre_sport_sport_name,
      region: fp_ccs.fm_pre_country_title
    });
  }
});
