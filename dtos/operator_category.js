/**
 * @param {import("../types/db").Game_casino} game_casino 
 * @param {import("../types/db").Operator} operatorInfo 
 */
module.exports = (operatorInfo, game_casino) => {
  return {
    id:           '',
    operator_id:  operatorInfo.project,
    category_id:  '',
    type:         game_casino.type,
    product:      game_casino.site_section,
    order:        ''
  };
};
