/**
 * @template T
 * @typedef {import('../types').PaginationResult<T>} PaginationResult<T>
 */

/**
 * @typedef {import('../types').db.User} User
 * @typedef {import('../types').db.Transaction} Transaction
 * @typedef {import('../types').db.Log_balance} Log_balance
 * @typedef {import('../types').db.Xrate} Xrate
 * @typedef {import('../types').db.Game_casino} Game_casino
 * 
 * @typedef {import('../types').db.Fm_pre_country} Fm_pre_country
 * @typedef {import('../types').db.Fm_pre_competition_prefixed} Fm_pre_competition_prefixed
 * @typedef {import('../types').db.Fm_pre_market_type_prefixed} Fm_pre_market_type_prefixed
 * @typedef {import('../types').db.Fm_pre_event_state_prefixed} Fm_pre_event_state_prefixed
 * @typedef {import('../types').db.Fm_pre_price_type_prefixed} Fm_pre_price_type_prefixed
 * @typedef {import('../types').db.Fm_pre_country_prefixed} Fm_pre_country_prefixed
 * @typedef {import('../types').db.Fm_pre_event_prefixed} Fm_pre_event_prefixed
 * @typedef {import('../types').db.Fm_pre_sport_prefixed} Fm_pre_sport_prefixed
 * @typedef {import('../types').db.Fm_pre_sport} Fm_pre_sport
 * @typedef {import('../types').db.Fm_pre_team_prefixed} Fm_pre_team_prefixed
 * 
 * @typedef {import('../types').db.Fk_operator_region_prefixed} Fk_operator_region_prefixed
 * @typedef {import('../types').db.Operator_prefixed} Operator_prefixed
 */

const DBBase = require('../modules/db-base');
const Paginator = require('../modules/paginator');

module.exports = class DB extends DBBase {
  constructor(project) {
    super(project);
  }


  /** @returns {Promise<Xrate[]>} */
  static async selectCurrencies() {
    const result = await this.from('obs').raw('SELECT * FROM `bu_xrates`');
    return this.resultArr(result);
  }

  /** @returns {Promise<Fm_pre_country[]} */
  static async sportsBookRegions() {
    const result = await this.from('obs').raw('SELECT * FROM `fm_pre_country`');
    return this.resultArr(result);
  }

  /** @returns {Promise<PaginationResult<Fm_pre_competition_prefixed & Fm_pre_country_prefixed & Fm_pre_sport_prefixed>>} */
  static async sportsBookTournaments(page, limit) {
    const competitionFields = await this.fields('obs', 'fm_pre_competition');
    const countryFields = await this.fields('obs', 'fm_pre_country');
    const sportFields = await this.fields('obs', 'fm_pre_sport');

    return new Paginator(
      this.from('obs')
        .select(
          ...competitionFields.getPrefixed(),
          ...countryFields.getPrefixed(),
          ...sportFields.getPrefixed()
        )
        .from('fm_pre_competition')
        .leftJoin('fm_pre_country', 'fm_pre_competition.country_id', 'fm_pre_country.id')
        .leftJoin('fm_pre_sport', 'fm_pre_competition.sport_id', 'fm_pre_sport.id')
    )
    .page(page)
    .limit(limit);
  }

  /** @returns {Promise<PaginationResult<Fm_pre_market_type_prefixed & Fm_pre_sport_prefixed>>} */
  static async sportsBookMarkets(page, limit) {
    const marketTypeFields = await this.fields('obs', 'fm_pre_market_type');
    const sportFields = await this.fields('obs', 'fm_pre_sport');

    return new Paginator(
      this.from('obs')
        .select(
          ...marketTypeFields.getPrefixed(),
          ...sportFields.getPrefixed()
        )
        .from('fm_pre_market_type')
        .leftJoin('fm_pre_sport', 'fm_pre_market_type.sport_id', 'fm_pre_sport.id')
    )
    .page(page)
    .limit(limit);
  }

  /** @returns {Promise<PaginationResult<Fm_pre_team_prefixed & Fm_pre_sport_prefixed>>} */
  static async sportsBookParticipants(page, limit) {
    const teamFields = await this.fields('obs', 'fm_pre_team');
    const sportFields = await this.fields('obs', 'fm_pre_sport');

    return new Paginator(
      this.from('obs')
        .select(
          ...teamFields.getPrefixed(),
          ...sportFields.getPrefixed()
        )
        .from('fm_pre_team')
        .leftJoin('fm_pre_competition', 'fm_pre_team.competition_id', 'fm_pre_competition.id')
        .leftJoin('fm_pre_sport', 'fm_pre_competition.sport_id', 'fm_pre_sport.id')
    )
    .page(page)
    .limit(limit);
  }

  /** @returns {Promise<PaginationResult<Fm_pre_price_type_prefixed & Fm_pre_sport_prefixed & Fm_pre_market_type_prefixed>>} */
  static async sportsBookSelections(page, limit) {
    const priceTypeFields = await this.fields('obs', 'fm_pre_price_type');
    const marketTypeFields = await this.fields('obs', 'fm_pre_market_type');
    const sportFields = await this.fields('obs', 'fm_pre_sport');

    return new Paginator(
      this.from('obs')
        .select(
          ...priceTypeFields.getPrefixed(),
          ...marketTypeFields.getPrefixed(),
          ...sportFields.getPrefixed()
        )
        .from('fm_pre_price_type')
        .leftJoin('fm_pre_market_type', 'fm_pre_price_type.market_type_id', 'fm_pre_market_type.id')
        .leftJoin('fm_pre_sport', 'fm_pre_market_type.sport_id', 'fm_pre_sport.id')
    )
    .page(page)
    .limit(limit);
  }

  /** @returns {Promise<PaginationResult<Fm_pre_event_prefixed & Fm_pre_event_state_prefixed & Fm_pre_sport_prefixed & Fm_pre_country_prefixed & Fm_pre_competition_prefixed>>} */
  static async sportsBookMatches(page, limit) {
    const eventFields = await this.fields('obs', 'fm_pre_event');
    const eventStateFields = await this.fields('obs', 'fm_pre_event_state');
    const sportFields = await this.fields('obs', 'fm_pre_sport');
    const competitionFields = await this.fields('obs', 'fm_pre_competition');
    const countryFields = await this.fields('obs', 'fm_pre_country');

    return new Paginator(
      this.from('obs')
        .select(
          ...eventFields.getPrefixed(),
          ...eventStateFields.getPrefixed(),
          ...sportFields.getPrefixed(),
          ...competitionFields.getPrefixed(),
          ...countryFields.getPrefixed()
        )
        .from('fm_pre_event')
        .leftJoin('fm_pre_event_state', 'fm_pre_event.event_state_id', 'fm_pre_event_state.id')
        .leftJoin('fm_pre_sport', 'fm_pre_event.sport_id', 'fm_pre_sport.id')
        .leftJoin('fm_pre_competition', 'fm_pre_event.competition_id', 'fm_pre_competition.id')
        .leftJoin('fm_pre_country', 'fm_pre_competition.country_id', 'fm_pre_country.id')
    )
    .page(page)
    .limit(limit);
  }

  /** @returns {Promise<(Fk_operator_region_prefixed & Operator_prefixed)[]>} */
  static async region2operator(project) {
    const operatorRegionFields = await this.fields('topology', 'fk_operator_region');
    const operatorFields = await this.fields('topology', 'operators');

    const result = await this.from('topology').raw(`
      SELECT
        ${operatorRegionFields.getPrefixed({quote: true}).join(', ')},
        ${operatorFields.getPrefixed({quote: true}).join(', ')}
      FROM
        \`fk_operator_region\`
      INNER JOIN
        \`operators\` ON
          \`operators\`.id = \`fk_operator_region\`.operator_id
          AND \`operators\`.title = '${project}'
    `);
    return this.result(result);
  }

  /** @returns {Promise<Fm_pre_sport[]>} */
  static async getSports() {
    const result = await this.from('obs').raw(`SELECT * FROM \`fm_pre_sport\``);
    return DB.resultArr(result);
  }




  /**
   * @param {Array<number | string> | number | string} id
   * @returns {Promise<User>}
   */
  async getUserById(id) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id = ?`, [id]);
    return DB.result(result);
  }

  /**
   * @param {Array<number | string> | number | string} idArr
   * @returns {Promise<User[]>}
   */
  async getUsersById(idArr) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id IN (?)`, [idArr]);
    return DB.resultArr(result);
  }

  /**
   * @param {number} page 
   * @param {import('../types').WhereStructure<number>} where 
   * @returns {Promise<PaginationResult<User>>}
   */
  async getUsers(page = 1, limit = null, where = null) {
    const knex = this.knex(this.tableUnquoted('users')).select('*');

    if (where) {
      knex.where('id', where.id.operator, where.id.value);
    }

    return new Paginator(knex)
    .page(page)
    .limit(limit);
  }




  /**
   * @param {Array<number | string> | number | string} id
   * @returns {Promise<Transaction>}
   */
  async getTransactionById(id) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('transactions')} WHERE id = ?`, [id]);
    return DB.result(result);
  }

  /**
   * @param {Array<number | string> | number | string} idArr
   * @returns {Promise<Transaction[]>}
   */
  async getTransactionsById(idArr) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('transactions')} WHERE id IN (?)`, [idArr]);
    return DB.resultArr(result);
  }

  /**
   * @param {Date} from
   * @param {Date} to
   * @returns {Promise<import('stream').Transform>}
   */
  async getTransactionsByRange(from, to) {
    return this.knex.raw(`SELECT * FROM ${this.table('transactions')} WHERE created_at BETWEEN ? AND ?`, [from, to]).stream();
  }



  /**
   * @param {Date} from 
   * @param {Date} to 
   * @param {number} page 
   * @returns {Promise<PaginationResult<Log_balance>>}
   */
  async getBalanceLog(from, to, page, limit = null) {
    return new Paginator(
      this.knex(this.tableUnquoted('log_balance'))
        .select('*')
        .whereBetween('created', [from, to])
    )
    .page(page)
    .limit(limit);
  }




  /**
   * @param {number} page 
   * @returns {Promise<PaginationResult<Game_casino>>}
   */
  async getGamesCasino(page = 1, limit = null) {
    return new Paginator(this.knex(
      this.tableUnquoted('games_casino')).select('*')
    )
    .page(page)
    .limit(limit)
  }

  /**
   * @param {number} page 
   * @returns {Promise<PaginationResult<Game_casino>>}
   */
  async getCasinoProviders(page = 1, limit = null) {
    return new Paginator(
      this.knex(this.tableUnquoted('games_casino')).select('*').groupBy('provider')
    )
    .countQuery(this.knex.raw(`
      SELECT count(*) FROM (SELECT DISTINCT provider FROM ${this.table('games_casino')} GROUP BY provider) AS sq
    `))
    .page(page)
    .limit(limit);
  }

  /**
   * @param {number} page 
   * @returns {Promise<PaginationResult<Game_casino>>}
   */
  async getCasinoCategories(page = 1, limit = null) {
    return new Paginator(
      this.knex(this.tableUnquoted('games_casino')).select('*').where('deleted', '=', '0').groupBy('type', 'site_section')
    )
    .countQuery(
      this.knex.raw(`
        SELECT count(*)
        FROM (
          SELECT count(*)
          FROM ${this.table('games_casino')}
          WHERE deleted = '0'
          GROUP BY type, site_section
        ) t
      `)
    )
    .page(page)
    .limit(limit);
  }
};
