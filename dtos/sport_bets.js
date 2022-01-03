/**
 * @typedef {import("../types").db.S_bet_prefixed} s_bet
 * @typedef {import("../types").db.Log_balance_prefixed} log_balance
 */

/**
 * @param {s_bet & log_balance} sb_lb
 */
module.exports = (sb_lb) => {
  return {
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
  };
};
