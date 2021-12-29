/**
 * @param {import("../types").db.S_bet} s_bet 
 * @param {import("../types").db.Log_balance} log_balance
 */
module.exports = (s_bet, log_balance) => {
  return {
    id: s_bet.s_bets_id,
    client_id: s_bet.s_bets_player_id,
    operator_id: s_bet.s_bets_shop_id,                                     // ?
    amount: s_bet.s_bets_bet_amount,
    currency: s_bet.s_bets_player_currency,
    amount_main_currency: s_bet.s_bets_bet_amount,                         // ?
    main_currency: s_bet.s_bets_currency,
    type: s_bet.s_bets_is_recalc ? 'recalc' : s_bet.s_bets_is_paid ? 'win' : 'bet',
    status: s_bet.s_bets_is_paid,
    odd: s_bet.s_bets_total_odds,
    possible_win: s_bet.s_bets_payout_amount,
    provider_id: s_bet.s_bets_shop_id,                                     // ?
    provider_title: '',                                             // ?
    created_at: s_bet.s_bets_date_created,
    updated_at: s_bet.s_bets_date_created,
    settled_at: s_bet.s_bets_date_calculated,
    paid_at: s_bet.s_bets_date_paid,
    locale: '',                                                     // ?
    bet_type: '',                                                   // ?
    cart: '',                                                       // ?
    balance_log_id: log_balance.log_balance_id ? log_balance.log_balance_id : '',
  };
};
