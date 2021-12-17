/**
 * @typedef {import('../types').db.User} User
 * @typedef {import('../types').db.Transaction} Transaction
 */

const knex = require('knex');

module.exports = class DB {
  constructor(project) {
    if (!_projects.getNames().includes(project)) {
      throw new Error(`Error while setupping db (Project not found => ${project})`);
    }
    /** @private */
    this.project = project;
    /** @private */
    this.knex = knex(_projects.getProjectCredentials(project));
  }

  /**
   * @type {Map<string, DB>}
   * @private
   */
  static _initializedDBs = new Map();

  static project(project) {
    if (!DB._initializedDBs.has(project)) {
      DB._initializedDBs.set(project, new this(project));
    }
    return DB._initializedDBs.get(project);
  }

  /** @private */
  static getResultArr(result) {
    return (result && result[0]) || null;
  }

  /** @private */
  static getResult(result) {
    return (result && result[0] && result[0][0]) || null;
  }

  /** @private */
  table(table) {
    return _projects.getProjectTable(this.project, table);
  }

  /**
   * @param {Array<number | string> | number | string} id
   * @returns {Promise<User>}
   */
  async getUserById(id) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id = ?`, [id]);
    return DB.getResult(result);
  }

  /**
   * @param {Array<number | string> | number | string} idArr
   * @returns {Promise<User[]>}
   */
  async getUsersById(idArr) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id IN (?)`, [idArr]);
    return DB.getResultArr(result);
  }

  /**
   * @param {Array<number | string> | number | string} id
   * @returns {Promise<Transaction>}
   */
  async getTransactionById(id) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('transactions')} WHERE id = ?`, [id]);
    return DB.getResult(result);
  }

  /**
   * @param {Array<number | string> | number | string} idArr
   * @returns {Promise<Transaction[]>}
   */
  async getTransactionsById(idArr) {
    const result = await this.knex.raw(`SELECT * FROM ${this.table('transactions')} WHERE id IN (?)`, [idArr]);
    return DB.getResultArr(result);
  }
}
