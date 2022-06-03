/**
 * @typedef {import('../types/db').Game_casino} GameCasino
 * @typedef {import('../types/db').Operator} Operator
 */

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'games_casino',
  column: 'id',
}, {
  name: 'name',
  table: 'games_casino',
  column: 'name',
}, {
  name: 'title',
  table: 'games_casino',
  column: 'name',
}, {
  name: 'order',
  table: 'games_casino',
  column: 'priority',
}, {
  name: 'provider',
  table: 'games_casino',
  column: 'provider',
}, {
  name: 'integrator',
  table: 'games_casino',
  column: 'aggregator',
}], {
  /**
   * @param {GameCasino} game_casino 
   * @param {Operator} operatorInfo 
   */
  postProcess(result, game_casino, operatorInfo) {
    return Object.assign(result, {
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
    });
  }
});
