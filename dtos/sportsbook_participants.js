/**
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 * @typedef {import('../types').db.Fm_pre_team_prefixed} Fm_pre_team_prefixed
 */

/**
 * @param {Fm_pre_team_prefixed & Fm_pre_sport_prefixed} fpts
 */
module.exports = (fpts) => {
  return {
    id: fpts.fm_pre_team_id,
    name: fpts.fm_pre_team_team_name,
    short_name: '',
    sport: fpts.fm_pre_sport_sport_name
  };
};
