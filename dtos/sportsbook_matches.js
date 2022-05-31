/**
 * @typedef {import('../types').db.Fm_pre_event_prefixed} Fm_pre_event_prefixed
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 * @typedef {import('../types').db.Fm_pre_country_prefixed} Fm_pre_country_prefixed
 * @typedef {import('../types').db.Fm_pre_competition_prefixed} Fm_pre_competition_prefixed
 * @typedef {import('../types').db.Fm_pre_event_state_prefixed} Fm_pre_event_state_prefixed
 */

/**
 * @param {Fm_pre_event_prefixed & Fm_pre_event_state_prefixed & Fm_pre_sport_prefixed & Fm_pre_country_prefixed & Fm_pre_competition_prefixed} fpscc
 */
module.exports = (fpscc) => {
  return {
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
  };
};
