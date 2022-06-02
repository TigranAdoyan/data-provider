const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'sport_bets',
  column: 'id',
}, {
  name: 'client_id',
  table: 'sport_bets',
  column: 'player_id',
}, {
  name: 'operator_id',
  table: 'sport_bets',
  column: 'shop_id',
}, {
  name: 'amount',
  table: 'sport_bets',
  column: 'bet_amount',
}, {
  name: 'currency',
  table: 'sport_bets',
  column: 'player_currency',
}, {
  name: 'amount_main_currency',
  table: 'sport_bets',
  column: 'bet_amount',
}, {
  name: 'main_currency',
  table: 'sport_bets',
  column: 'currency',
}, {
  name: 'status',
  table: 'sport_bets',
  column: 'is_paid',
}, {
  name: 'odd',
  table: 'sport_bets',
  column: 'total_odds',
}, {
  name: 'possible_win',
  table: 'sport_bets',
  column: 'payout_amount',
}, {
  name: 'provider_id',
  table: 'sport_bets',
  column: 'shop_id',
}, {
  name: 'created_at',
  table: 'sport_bets',
  column: 'date_created',
}, {
  name: 'updated_at',
  table: 'sport_bets',
  column: 'date_created',
}, {
  name: 'settled_at',
  table: 'sport_bets',
  column: 'date_calculated',
}, {
  name: 'paid_at',
  table: 'sport_bets',
  column: 'date_paid',
}], {
  postProcess(result, sb_lb) {
    return Object.assign(result, {
      id:                   sb_lb.s_bets_id,
      client_id:            sb_lb.s_bets_player_id,
      operator_id:          sb_lb.s_bets_shop_id,                                                     // project name
      amount:               sb_lb.s_bets_bet_amount,
      currency:             sb_lb.s_bets_player_currency,
      amount_main_currency: sb_lb.s_bets_bet_amount,
      main_currency:        sb_lb.s_bets_currency,
      type:                 sb_lb.s_bets_is_recalc ? 'recalc' : sb_lb.s_bets_is_paid ? 'win' : 'bet', // ?
      status:               sb_lb.s_bets_is_paid,
      odd:                  sb_lb.s_bets_total_odds,
      possible_win:         sb_lb.s_bets_payout_amount,
      provider_id:          sb_lb.s_bets_shop_id,                                                     // ?
      provider_title:       '',
      created_at:           sb_lb.s_bets_date_created,
      updated_at:           sb_lb.s_bets_date_created,
      settled_at:           sb_lb.s_bets_date_calculated,
      paid_at:              sb_lb.s_bets_date_paid,
      locale:               '',
      bet_type:             '',
      cart:                 '',
      balance_log_id:       '',
    });
  }
});
