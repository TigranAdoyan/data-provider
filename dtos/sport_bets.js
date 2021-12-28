/**
 * @param {import("../types").db.S_bet} s_bet 
 * @param {import("../types").db.Log_balance} log_balance
 */
module.exports = (s_bet, log_balance) => {
  return {
    id: s_bet.id,
    client_id: s_bet.player_id,
    operator_id: s_bet.shop_id,                                     // ?
    amount: s_bet.bet_amount,
    currency: s_bet.player_currency,
    amount_main_currency: s_bet.bet_amount,                         // ?
    main_currency: s_bet.currency,
    type: s_bet.is_recalc ? 'recalc' : s_bet.is_paid ? 'win' : 'bet',
    status: s_bet.is_paid,
    odd: s_bet.total_odds,
    possible_win: s_bet.payout_amount,
    provider_id: s_bet.shop_id,                                     // ?
    provider_title: '',                                             // ?
    created_at: s_bet.date_created,
    updated_at: s_bet.date_created,
    settled_at: s_bet.date_calculated,
    paid_at: s_bet.date_paid,
    locale: '',                                                     // ?
    bet_type: '',                                                   // ?
    cart: '',                                                       // ?
    balance_log_id: log_balance ? log_balance.id : '',
  };
};
