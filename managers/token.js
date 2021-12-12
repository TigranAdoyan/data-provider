const jwt = require('jsonwebtoken');
const fs = require('fs');
const AppError = require('./app-error');

module.exports = class TokenManager {
  /**
   * @param {string | {}} data 
   */
  static encode(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 60 * 24
    });
  }

  /**
   * @param {string} token 
   * @returns {Promise<import('jsonwebtoken').JwtPayload>}
   */
  static decode(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded);
      });
    });
  }

  static verfiyPayload(payload) {
    if (
      !payload ||
      !payload.userData ||
      !payload.userData.access ||
      !payload.userData.access.allow ||
      !payload.userData.access.allow.projects ||
      !payload.userData.access.allow.path ||
      !payload.userData.access.deny ||
      !payload.userData.access.deny.projects ||
      !payload.userData.access.deny.projects
    ) {
      throw new AppError('Invalid token payload', 400);
    }
  }

  /**
   * generates access token if username and password is valid
   * @param {string} username 
   * @param {string} password 
   */
  static async authToken(username, password) {
    const user = await TokenManager.findUser(username, password);
    if (!user) return;

    return TokenManager.encode({
      userData: {
        access: user.access
      }
    });
  }

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
   * returns true if taken has access to project otherwise false
   * @param {string} token 
   * @param {string} project 
   */
  static async verifyProject(token, project) {
    try {
      const payload = await TokenManager.decode(token);
      TokenManager.verfiyPayload(payload);

      const allowed = payload.userData.access.allow.projects === true ||
                      payload.userData.access.allow.projects.includes(project);
      const denied = payload.userData.access.deny.projects.includes(project);
      return Boolean(allowed && !denied);
    } catch (e) {
      throw new AppError('Invalid token', 400);
    }
  }

  /**
   * returns true if token as access to path otherwise false
   * @param {string} token 
   * @param {string} path 
   */
  static async verifyAccess(token, path) {
    try {
      const payload = await TokenManager.decode(token);
      TokenManager.verfiyPayload(payload);

      const pathArr = path.split('/');
      const allowed = TokenManager.checkObjectByArray(payload.userData.access.allow.path, pathArr);
      const denied = TokenManager.checkObjectByArray(payload.userData.access.deny.path, pathArr);
      return Boolean(allowed && !denied);
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
};
