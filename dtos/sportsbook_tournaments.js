/**
 * @typedef {import('../types').db.Fm_pre_competition_prefixed} Fm_pre_competition_prefixed
 * @typedef {import('../types').db.Fm_pre_country_prefixed} Fm_pre_country_prefixed
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 */


/**
 * @param {Fm_pre_competition_prefixed & Fm_pre_country_prefixed & Fm_pre_sport_prefixed} fp_ccs
 */
module.exports = (fp_ccs) => {
  return {
    id:     fp_ccs.fm_pre_competition_id,
    name:   fp_ccs.fm_pre_competition_competition_name,
    sport:  fp_ccs.fm_pre_sport_sport_name,
    region: fp_ccs.fm_pre_country_title
  };
};
