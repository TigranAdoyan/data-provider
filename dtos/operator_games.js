/**
 * @param {import("../types/db").Game_casino} game_casino 
 * @param {import("../types/db").Operator} operatorInfo 
 */
module.exports = (game_casino, operatorInfo) => {
  return {
    id:               game_casino.id,
    operator_id:      operatorInfo.project,
    name:             game_casino.name,
    title:            game_casino.name,
    order:            game_casino.priority, 
    order_meta:       '',                                             // ?
    free_spins:       Boolean(game_casino.has_freespins),
    provider:         game_casino.provider,
    integrator:       game_casino.aggregator,
    status:           Boolean(game_casino.deleted),
    adding_date:      new Date(0),
    mobile_supported: Boolean(game_casino.device_support)
  };
};
