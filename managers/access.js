const fs = require('fs');
const AppError = require('../modules/app-error');
const TokenManager = require('./token');
const groups = require('../configs/groups.json');

module.exports = class AccessManager {
  /**
   * @param {string} username 
   * @param {string} password 
   */
  static async findUser(username, password) {
    const users = JSON.parse(await fs.promises.readFile('./configs/users.json'));

    for (const user of users.list) {
      if (user.user === username && user.pass === password) {
        return user;
      }
    }
  }

  /**
   * @param {string} path 
   */
  static isProjectPath(path) {
    return path.substr(0, 16) === 'api/crm/operator';
  }

  /**
   * @param {string} path 
   */
  static isPlatformPath(path) {
    return path.substr(0, 16) === 'api/crm/platform';
  }

  /**
   * @param {string[]} userGroups 
   * @param {string} project 
   */
  static verifyProject(userGroups, path, project) {
    let maxPriority = 0;
    let allow = false;

    for (const gname of userGroups) {
      const group = groups[gname];

      if (group.type === 'allow' && !allow && maxPriority < group.priority) {
        if (
          (group.projects['*'] && AccessManager.checkPath(group.projects['*'], path)) ||
          (group.projects.list[project] && AccessManager.checkPath(group.projects.list[project], path))
        ) {
          maxPriority = group.priority;
          allow = true;
        }
      } else if (group.type === 'deny' && allow && maxPriority < group.priority) {
        if (
          (group.projects['*'] && AccessManager.checkPath(group.projects['*'], path)) ||
          (group.projects.list[project] && AccessManager.checkPath(group.projects.list[project], path))
        ) {
          maxPriority = group.priority;
          allow = false;
        }
      }
    }

    return allow;
  }

  /**
   * @param {string[]} userGroups 
   * @param {string} project 
   */
  static verifyPath(userGroups, path) {
    let maxPriority = 0;
    let allow = false;

    for (const gname of userGroups) {
      const group = groups[gname];

      if (
        !allow && 
        group.type === 'allow' && 
        maxPriority < group.priority && 
        AccessManager.checkPath(group.platform, path)
      ) {
        maxPriority = group.priority;
        allow = true;
      } else if (
        allow && 
        group.type === 'deny' && 
        maxPriority < group.priority && 
        AccessManager.checkPath(group.platform, path)
      ) {
        maxPriority = group.priority;
        allow = false;
      }
    }

    return allow;
  }

  /**
   * returns true if token has access to route otherwise false
   * @param {string} token 
   * @param {string} path 
   * @param {string} project 
   */
  static async verifyAccess(token, path, project = null) {
    try {
      const payload = await TokenManager.decode(token);
      if (!TokenManager.verfiyPayload(payload)) throw new AppError('Invalid token payload', 400);
      return project
        ? AccessManager.verifyProject(payload.userData.groups, path, project)
        : AccessManager.verifyPath(payload.userData.groups, path);
    } catch (e) {
      throw new AppError('Invalid token', 400);
    }
  }

  /**
   * returns true if object has all keys from keysArr
   * or if the value of one key is true
   * @private
   * @param {*} obj
   * @param {string[]} keysArr
   */
  static checkObjectByArray(obj, keysArr) {
    let subObj = obj;

    for (const key of keysArr) {
      if (!key) continue;
      if (subObj[key] === true) return true;
      if (!subObj[key]) return false;
      subObj = subObj[key];
    }
    return false;
  }

  static checkPath(obj, path) {
    const pathArr = path.split('/');
    return AccessManager.checkObjectByArray(obj, pathArr);
  }
};
