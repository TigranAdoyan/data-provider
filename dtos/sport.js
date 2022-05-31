/**
 * @typedef {import('../types').db.Fm_pre_sport} Fm_pre_sport
 */

/**
 * @param {Fm_pre_sport } fps
 */
module.exports = (fps) => {
  return {
    id:       fps.id,
    name:     fps.sport_name,
    priority: fps.priority
  };
};
