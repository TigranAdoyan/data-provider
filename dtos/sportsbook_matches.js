/**
 * @typedef {import('../types/db').Fm_pre_event_prefixed} Event
 * @typedef {import('../types/db').Fm_pre_sport_prefixed} Sport
 * @typedef {import('../types/db').Fm_pre_country_prefixed} Country
 * @typedef {import('../types/db').Fm_pre_event_state_prefixed} EventState
 * @typedef {import('../types/db').Fm_pre_competition_prefixed} Competition
 */

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_event',
  column: 'id',
}, {
  name: 'match',
  table: 'fm_pre_event',
  column: 'event_name',
}, {
  name: 'sport_id',
  table: 'fm_pre_sport',
  column: 'id',
}, {
  name: 'region_id',
  table: 'fm_pre_country',
  column: 'id',
}, {
  name: 'tournament_id',
  table: 'fm_pre_competition',
  column: 'id',
}, {
  name: 'start_time',
  table: 'fm_pre_event',
  column: 'event_start_time',
}, {
  name: 'status',
  table: 'fm_pre_event_state',
  column: 'event_state_name',
}], {
  /** @param {Event & Sport & Country & EventState & Competition} fpscc */
  postProcess(result, fpscc) {
    return Object.assign(result, {
      id:                 fpscc.fm_pre_event_id,
      match:              fpscc.fm_pre_event_event_name,
      sport_id:           fpscc.fm_pre_sport_id,
      region_id:          fpscc.fm_pre_country_id,
      tournament_id:      fpscc.fm_pre_competition_id,
      participants:       [fpscc.fm_pre_event_t1_id, fpscc.fm_pre_event_t2_id],
      start_time:         fpscc.fm_pre_event_event_start_time,
      live_available:     'no',
      prematch_available: 'yes',
      result:             '',
      winner:             '',
      status:             fpscc.fm_pre_event_state_event_state_name,
      risk_mark:          0
    });
  }
});
