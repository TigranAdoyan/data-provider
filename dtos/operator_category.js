const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'type',
  table: 'games_casino',
  column: 'type',
}, {
  name: 'product',
  table: 'games_casino',
  column: 'site_section',
}], {
  postProcess(result, operatorInfo, game_casino) {
    return Object.assign(result, {
      id:           '',
      operator_id:  operatorInfo.project,
      category_id:  '',
      type:         game_casino.type,
      product:      game_casino.site_section,
      order:        ''
    });
  }
});

