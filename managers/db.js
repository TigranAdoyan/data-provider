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

  getGamesByRange(game, from, to, page = 0, limit = 5000) {
    const version = _projects.getGamesVersion(game);
    return this['getGamesByRange' + version](game, from, to, page * limit, limit);
  }

  async getGamesByRangeV0(game, from, to, offset, limit) {
    const project = _projects.getProjectTable(this.project, _projects.getGamesTable(game));
    const games = await this.knex.raw(`
      SELECT * 
      FROM ${project} 
      WHERE 
        (\`status\` = 2 OR \`status\` = 3) AND 
        \`date_created\` BETWEEN '${from}' AND '${to}'
      LIMIT ${limit}
      OFFSET ${offset}
    `);
    return games && games[0] ? games[0] : null;
  }

  async getGamesByRangeV1(game, from, to, offset, limit) {
    const project = _projects.getProjectTable(this.project, _projects.getGamesTable(game));
    const games = await this.knex.raw(`
      SELECT * 
      FROM ${project} 
      WHERE 
        (\`ststatus\` = 2 OR \`ststatus\` = 3) AND 
        \`dt\` BETWEEN '${from}' AND '${to}'
      LIMIT ${limit}
      OFFSET ${offset}
    `);
    return games && games[0] ? games[0] : null;
  }

  async getGamesByRangeV2(game, from, to, offset, limit) {
    const project = _projects.getProjectTable(this.project, _projects.getGamesTable(game));
    const games = await this.knex.raw(`
      SELECT * 
      FROM ${project} 
      WHERE 
        \`rollback\` IS NULL AND 
        \`inserted_at\` BETWEEN '${from}' AND '${to}'
      LIMIT ${limit}
      OFFSET ${offset}
    `);
    return games && games[0] ? games[0] : null;
  }
}
