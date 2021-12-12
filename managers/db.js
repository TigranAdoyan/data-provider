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
  static getResult(result) {
    return (result && result[0] && result[0][0]) || null;
  }

  /** @private */
  table(table) {
    return _projects.getProjectTable(this.project, table);
  }

  /**
   * @param {Array<number | string> | number | string} idSelector
   */
  async getUserById(idSelector) {
    if (typeof idSelector === 'number' || typeof idSelector === 'string') {
      const result = await this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id = '${idSelector}'`);
      return DB.getResult(result);
    } else if (Array.isArray(idSelector)) {
      return Promise.all(idSelector.map((id) => {
        const result = this.knex.raw(`SELECT * FROM ${this.table('users')} WHERE id = '${id}'`);
        return DB.getResult(result);
      }));
    }
  }
}
