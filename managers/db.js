/**
 * @typedef {import('../types').db.User} User
 * @typedef {import('../types').db.Transaction} Transaction
 * @typedef {import('../types').db.Xrate} Xrate
 * @typedef {import('../types').db.Game_casino} Game_casino
 */

const {knex, Knex} = require('knex');
const TableFields = require('./table-fields');
const Paginator = require('../managers/paginator');

module.exports = class DB {
  constructor(project) {
    if (!DB._connections.has(project)) {
      throw new Error(`Error while setupping db (Connection not found => ${project})`);
    }
    /** @private */
    this.project = project;
    /** @private @type {Map<string, TableFields>} */
    this.fieldsList = new Map();
    /** @private */
    this.knex = knex(DB.connection(project));
  }

  /**
   * @type {Map<string, DB>}
   * @private
   */
  static _initializedProjectDBs = new Map();

  /**
   * @type {Map<string, typeof _configs.db.mysql>}
   * @private
   */
  static _connections = new Map();

  /**
   * @type {Map<string, Knex>}
   * @private
   */
   static _knex = new Map();

  static project(project) {
    if (!DB._initializedProjectDBs.has(project)) {
      if (!_projects.getNames().includes(project)) {
        throw new Error(`Error while setupping db (Project not found => ${project})`);
      }

      if (!DB._connections.has(project)) {
        DB._connections.set(project, _projects.getProjectCredentials(project));
      }

      DB._initializedProjectDBs.set(project, new this(project));
    }
    return DB._initializedProjectDBs.get(project);
  }

  static connection(db) {
    if (!DB._connections.has(db)) {
      DB._connections.set(db, _configs.connection(db));
    }
    return DB._connections.get(db);
  }

  static from(db) {
    if (!DB._knex.has(db)) {
      DB._knex.set(db, knex(_configs.connection(db)));
    }
    return DB._knex.get(db);
  }

  /** @private */
  static resultArr(result) {
    return (result && result[0]) || null;
  }

  /** @private */
  static result(result) {
    return (result && result[0] && result[0][0]) || null;
  }

  /** @private */
  table(table) {
    return _projects.getProjectTable(this.project, table);
  }

  tableUnquoted(table) {
    return this.table(table).replace(/`/g, '');
  }

  /** @private @param {string} table */
  async fields(table) {
    table = this.table(table);
    if (!this.fieldsList.has(table)) {
      const fieldsArr = DB.resultArr(await this.knex.raw(`SHOW COLUMNS FROM ${table}`));
      const splitted = table.split('.');
      const db = splitted[0].substr(1, splitted[0].length - 2);
      const tbl = splitted[1].substr(1, splitted[1].length - 2);
      this.fieldsList.set(table, new TableFields(db, tbl, fieldsArr));
    }
    return this.fieldsList.get(table);
  }


  /** @returns {Promise<Xrate[]>} */
  static async selectCurrencies() {
    const result = await DB.from('obs').raw('SELECT * FROM `bu_xrates`');
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
   * @returns {Promise<import('../types').PaginationResult<User>>}
   */
  async getUsers(page = 1, limit = null) {
    const pQuery = new Paginator(this.knex(this.tableUnquoted('users')).select('*'));
    return pQuery.page(page).limit(limit);
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
   * @returns {Promise<import('stream').Transform>}
   */
  async getSportBetsByRange(from, to) {
    const sb = this.table('s_bets');
    const lb = this.table('log_balance');

    const sbf = await this.fields('s_bets');
    const lbf = await this.fields('log_balance');

    return this.knex.raw(`
      SELECT
        ${sbf.getPrefixed({table: 'sb'})},
        ${lbf.getPrefixed({table: 'lb'})}
      FROM ${sb} sb
        LEFT JOIN ${lb} lb
        ON
              sb.is_paid IS TRUE
          AND lb.op = sb.package_id
          AND lb.created = sb.date_paid
      WHERE 
        sb.date_calculated BETWEEN ? AND ?
    `, [from, to]).stream();
  }

  /**
   * @param {number} page 
   * @returns {Promise<import('../types').PaginationResult<Game_casino>>}
   */
  async getGamesCasino(page = 1, limit = null) {
    const pQuery = new Paginator(this.knex(this.tableUnquoted('games_casino')).select('*'));
    return pQuery.page(page).limit(limit);
  }
};
