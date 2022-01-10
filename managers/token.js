const jwt = require('jsonwebtoken');
const fs = require('fs');

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
    return Boolean(
      payload &&
      payload.userData &&
      payload.userData.groups &&
      payload.userData.username
    );
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
        groups: user.groups,
        username
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
};
