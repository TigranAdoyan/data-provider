const knex = require('knex');

module.exports = class DB {
  constructor(project) {
    if (!_projects.getNames().includes(project)) {
      throw new Error(`Error while setupping db (Project not found => ${project})`);
    }

    this.project = project;
    this.knex = knex(_projects.getProjectCredentials());
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
}
