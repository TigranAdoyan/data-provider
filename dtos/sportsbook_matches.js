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
  name: 'sport',
  table: 'fm_pre_sport',
  column: 'sport_name',
}, {
  name: 'region',
  table: 'fm_pre_country',
  column: 'title',
}, {
  name: 'tournament',
  table: 'fm_pre_competition',
  column: 'competition_name',
}, {
  name: 'start_time',
  table: 'fm_pre_event',
  column: 'event_start_time',
}, {
  name: 'status',
  table: 'fm_pre_event_state',
  column: 'event_state_name',
}], {
  postProcess(result, fpscc) {
    return Object.assign(result, {
      id:                 fpscc.fm_pre_event_id,
      match:              fpscc.fm_pre_event_event_name,
      sport:              fpscc.fm_pre_sport_sport_name,
      region:             fpscc.fm_pre_country_title,
      tournament:         fpscc.fm_pre_competition_competition_name,
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
