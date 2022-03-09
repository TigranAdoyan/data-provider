/**
 * @param {import("../types/db").Game_casino} game_casino
 * @param {import("../types/db").Operator} operatorInfo
 */
module.exports = (game_casino, operatorInfo) => {
  return {
    id:           game_casino.id,
    operator_id:  operatorInfo.project,
    title:        game_casino.provider,
    order:        '',                                         // ?
    integrator:   game_casino.aggregator,
    status:       Number(!Boolean(game_casino.deleted))       // ?
  };
};
