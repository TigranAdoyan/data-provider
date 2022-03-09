const { knex, Knex } = require('knex');
const TableFields = require('./table-fields');

module.exports = class DBBase {
  constructor(project) {
    if (!DBBase._connections.has(project)) {
      throw new Error(`Error while setupping db (Connection not found => ${project})`);
    }
    /** @private */
    this.project = project;
    /** @protected */
    this.knex = knex(DBBase.connection(project));
  }

  /**
   * @type {Map<string, import('../managers/db')>}
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


  /**
   * @type {Map<string, TableFields>}
   * @private
   */
  static _fields = new Map();

  static project(project) {
    if (!this._initializedProjectDBs.has(project)) {
      if (!_projects.getNames().includes(project)) {
        throw new Error(`Error while setupping db (Project not found => ${project})`);
      }

      if (!this._connections.has(project)) {
        this._connections.set(project, _projects.getProjectCredentials(project));
      }

      this._initializedProjectDBs.set(project, new this(project));
    }
    return this._initializedProjectDBs.get(project);
  }

  static connection(db) {
    if (!this._connections.has(db)) {
      this._connections.set(db, _configs.connection(db));
    }
    return this._connections.get(db);
  }

  /** @param {string} db */
  static from(db) {
    if (!this._knex.has(db)) {
      this._knex.set(db, knex(_configs.connection(db)));
    }
    return this._knex.get(db);
  }

  /** @protected */
  static resultArr(result) {
    return (result && result[0]) || null;
  }

  /** @protected */
  static result(result) {
    return (result && result[0] && result[0][0]) || null;
  }

  /** @protected */
  static table(table, project) {
    return _projects.getProjectTable(project, table);
  }

  /** @protected */
  table(table) {
    return DBBase.table(table, this.project);
  }

  /** @protected */
  static tableUnquoted(table, project) {
    return this.table(table, project).replace(/`/g, '');
  }

  /** @protected */
  tableUnquoted(table) {
    return DBBase.tableUnquoted(table, this.project);
  }

  /** @protected */
  static async fields(db, table) {
    if (!this._fields.has(table)) {
      this._fields.set(table, await new TableFields(this.from(db), db, table).loadFields());
    }
    return this._fields.get(table);
  }

  /** @protected */
  async fields(table) {
    table = this.table(table);
    const splitted = table.split('.');
    const db = splitted[0].substr(1, splitted[0].length - 2);
    const tbl = splitted[1].substr(1, splitted[1].length - 2);
    return DBBase.fields(db, tbl);
  }
};
