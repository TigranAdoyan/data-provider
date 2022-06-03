/**
 * @typedef {import('../types').db.Fm_pre_competition_prefixed} Competition
 * @typedef {import('../types').db.Fm_pre_country_prefixed} Country
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Sport
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
  name: 'sport_id',
  table: 'fm_pre_sport',
  column: 'id'
}, {
  name: 'region',
  table: 'fm_pre_country',
  column: 'title'
}], {
  /** @param {Competition & Country & Sport} fp_ccs */
  postProcess(result, fp_ccs) {
    return Object.assign(result, {
      id:     fp_ccs.fm_pre_competition_id,
      name:   fp_ccs.fm_pre_competition_competition_name,
      sport_id:  fp_ccs.fm_pre_sport_id,
      region: fp_ccs.fm_pre_country_title
    });
  }
});
