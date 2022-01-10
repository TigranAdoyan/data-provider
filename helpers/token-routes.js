const { printTable } = require('console-table-printer');
const TokenManager = require('../managers/token');
const AccessManager = require('../managers/access');

module.exports = class TokenRoutes {
  static async byCredentials(username, password) {
    const token = await TokenManager.authToken(username, password);
    return this.getGrants(token);
  }

  static byGrouplist(...groups) {
    const token = TokenManager.encode({
      userData: {
        groups: groups
      }
    });
    return this.getGrants(token);
  }

  static byToken(token) {
    return this.getGrants(token);
  }

  /** @private */
  static async getGrants(token) {
    const routes = require('../configs/routes.json');
    const result = {
      /** @type {Map<string, Set<string>>} */
      projects: new Map(),
      /** @type {Set<string>} */
      platform: new Set()
    };

    for (const path of routes.routesStr) {
      if (AccessManager.isProjectPath(path)) {
        for (const project of _projects.getNames()) {
          if (!(await AccessManager.verifyAccess(token, path, project))) {
            continue;
          }

          if (!result.projects.has(path)) {
            result.projects.set(path, new Set());
          }
          result.projects.get(path).add(project);
        }
      }

      if (
        !result.platform.has(path) &&
        AccessManager.isPlatformPath(path) &&
        await AccessManager.verifyAccess(token, path)
      ) {
        result.platform.add(path);
      }
    }

    return result;
  }

  static prettyPrint(result) {
    const r = {
      projects: {...result.projects.entries()},
      platform: [...result.platform]
    };
    console.log(r);
    printTable(r);
  }
};
