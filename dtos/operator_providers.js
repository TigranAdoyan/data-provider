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
  name: 'title',
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
      id:           game_casino.id,
      operator_id:  operatorInfo.project,
      title:        game_casino.provider,
      order:        '',                                         // ?
      integrator:   game_casino.aggregator,
      status:       Number(!Boolean(game_casino.deleted))
    });
  }
});
