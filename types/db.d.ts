interface User {
  id: number,
  f_name: string,
  l_name: string,
  e_mail: string,
  password: string,
  active: number,
  avatar: string | null,
  username: string,
  timezone: string,
  balance: number,
  units: number,
  birthday: Date,
  gender: string,
  phone: string,
  address: string | null,
  city: string | null,
  country: string,
  currency: string,
  created: Date,
  kind: string,
  betting_allowed: number,
  op:string | null,
  locale: string,
  monitored: number,
  betlimit: string,
  maxbet: number,
  agent_id: number | null,
  referer: number | null,
  meta: string,
  deposit_bonus: number,
  v: number,
  bet_limit: number,
  live_delay: number,
  severity: number | null,
  redis_token: string,
  deleted: number,
  deleted_at: Date | null,
  kassa_id: number | null,
  gamehub_id: number | null,
  national_id_number: string | null,
  verification_id: string | null,
  migrated: number
}

interface Operator {
  id: number,
  project: string,
  branch: string,
  domain: string,
  parent: string,
  locale: string,
  currency: string,
  binding: number,
  title: string,
  sms: string | null,
  mail: string | null,
  password: string,
  template: string,
  logo: string | null,
  styling: string | null,
  zone: string,
  favicon: string | null,
  time_offset: number,
  country: string,
  country_code: string,
  version: number,
  pos_domain: string | null,
  dash_domain: string,
  agent_domain: string | null,
  header: boolean,
  is_active: boolean,
  V8: boolean,
  client_id: string | null,
  aggregator: string
}

declare enum TR_STATUS {
  INDETERMINATE = 'INDETERMINATE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  CANCELED = 'CANCELED',
  APPROVED = 'APPROVED',
  DENIED = 'DENIED',
  WAITGW = 'WAITGW'
}

interface Transaction {
  id: number,
  user_id: number,
  amount: number,
  status: TR_STATUS,
  op_type: string,
  currency: string,
  updated_at: Date,
  created_at: Date,
  transaction_num: string,
  token: string,
  gateway_token: string,
  gateway_trx_id: string,
  gateway_response: string,
  msisdn: string,
  tries: number,
  meta: string,
  bonus_checked: number,
  upload_id: number
}

interface S_bet_prefixed {
  s_bets_id: number,
  s_bets_package_id: string,
  s_bets_date_created: Date | null,
  s_bets_date_calculated: Date | null,
  s_bets_date_paid: Date | null,
  s_bets_shop_id: number,
  s_bets_player_id: number,
  s_bets_employee_id: number,
  s_bets_status: number,
  s_bets_bet_amount: string,
  s_bets_payout_amount: number | null,
  s_bets_paid_amount: number | null,
  s_bets_total_odds: string,
  s_bets_total_rows: number,
  s_bets_total_matches: number,
  s_bets_ztype: number,
  s_bets_hash: string,
  s_bets_is_gb: boolean,
  s_bets_is_paid: boolean,
  s_bets_is_live: boolean,
  s_bets_is_recalc: boolean,
  s_bets_payout_option: number,
  s_bets_paid_shop_id: number,
  s_bets_paid_employee_id: number | null,
  s_bets_bonus: number | null,
  s_bets_bonus_type: number,
  s_bets_currency: string,
  s_bets_promo_type: string | null,
  s_bets_promo_code: string | null,
  s_bets_rate: string | null,
  s_bets_rater_id: string,
  s_bets_note: string,
  s_bets_meta: string,
  s_bets_payout_currency: string,
  s_bets_player_currency: string | null,
  s_bets_archived: boolean
}

interface Log_balance_prefixed {
  log_balance_id: number,
  log_balance_user_id: number,
  log_balance_balance_old_value: string,
  log_balance_balance_new_value: string,
  log_balance_balance_diff: string,
  log_balance_created: Date
  log_balance_units_old_value: string,
  log_balance_units_new_value: string,
  log_balance_units_diff: string,
  log_balance_op: string,
  log_balance_fixed: number,
  log_balance_updated: Date | null,
}

interface Log_balance {
  id: number,
  user_id: number,
  balance_old_value: string,
  balance_new_value: string,
  balance_diff: string,
  created: Date
  units_old_value: string,
  units_new_value: string,
  units_diff: string,
  op: string,
  fixed: number,
  updated: Date | null,
}

interface Xrate {
  id: number,
  currency: string,
  rate: number,
  updated_at: Date,
  created_at: Date
}

interface Game_casino {
  id: number,
  name: string,
  uuid: string,
  url: string,
  aggregator: string,
  provider: string,
  type: string,
  has_freespins: number,
  technology: string,
  has_demo: number,
  device_support: number,
  image_bg: string,
  image: string,
  priority: number,
  site_section: string,
  marker_type: string | null,
  marker_text: string | null,
  deleted: number,     
  production: number,
  rtp: string,
  frame_size: number
}

interface Fm_pre_country {
  id: number,
  title: string
}

interface Fm_pre_country_prefixed {
  fm_pre_country_id: number,
  fm_pre_country_title: string
}

interface Fm_pre_competition_prefixed {
  fm_pre_competition_id: number,
  fm_pre_competition_competition_name: string,
  fm_pre_competition_sport_id: number,
  fm_pre_competition_country_id: number
}

interface Fm_pre_sport_prefixed {
  fm_pre_sport_id: number,
  fm_pre_sport_sport_name: string,
  fm_pre_sport_priority: number
}

interface Fm_pre_sport {
  id: number,
  sport_name: string,
  priority: number
}

interface Fm_pre_market_type_prefixed {
  fm_pre_market_type_id: number,
  fm_pre_market_type_market_type_name: string,
  fm_pre_market_type_market_type_code: string,
  fm_pre_market_type_sport_id: number,
  fm_pre_market_type_collection_id: number
}

interface Fm_pre_team_prefixed {
  fm_pre_team_id: number,
  fm_pre_team_team_name: string,
  fm_pre_team_competition_id: number
}

interface Fm_pre_price_type_prefixed {
  fm_pre_price_type_id: number,
  fm_pre_price_type_market_type_id: number,
  fm_pre_price_type_price_type_name: string
}

interface Fm_pre_event_state_prefixed {
  fm_pre_event_state_id: number,
  fm_pre_event_state_event_state_name: string
}

interface Fm_pre_event_prefixed {
  fm_pre_event_id: number,
  fm_pre_event_event_state_id: number,
  fm_pre_event_sport_id: number,
  fm_pre_event_event_start_time: Date,
  fm_pre_event_created_date: Date,
  fm_pre_event_competition_id: number,
  fm_pre_event_t1_id: number,
  fm_pre_event_t2_id: number,
  fm_pre_event_event_name: string,
  fm_pre_event_last_user: string | null,
  fm_pre_event_bm_time_lock: number | null
  fm_pre_event_hot: number,
  fm_pre_event_pre_disable: number,
  fm_pre_event_st_manual_update: number,
  fm_pre_event_top: number
}

interface Fk_operator_region_prefixed {
  fk_operator_region_id: number,
  fk_operator_region_operator_id: number,
  fk_operator_region_region_id: number
}

interface Operator_prefixed {
  operators_id: number,
  operators_title: string,
  operators_integration: string,
  operators_ranking: number,
  operators_status: string
}

interface Region_prefixed {
  regions_id: number,
  regions_title: string
}

export {
  User,
  Operator,
  Transaction,
  S_bet_prefixed,
  Log_balance_prefixed,
  Log_balance,
  Xrate,
  Game_casino,
  Fm_pre_country,
  Fm_pre_country_prefixed,
  Fm_pre_competition_prefixed,
  Fm_pre_sport_prefixed,
  Fm_pre_sport,
  Fm_pre_market_type_prefixed,
  Fm_pre_team_prefixed,
  Fm_pre_price_type_prefixed,
  Fm_pre_event_state_prefixed,
  Fm_pre_event_prefixed,
  Fk_operator_region_prefixed,
  Operator_prefixed,
  Region_prefixed
}
