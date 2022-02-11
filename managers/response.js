module.exports = class ResponseManager {
  /**
   * @param {import("express").Response} res 
   */
  static error(res) {
    return new ResponseManager(res, true, '');
  }

  /**
   * @param {import("express").Response} res 
   */
  static success(res) {
    return new ResponseManager(res, false, '');
  }

  /**
   * @param {import("express").Response} res 
   * @param {boolean} error 
   * @param {string} message 
   */
  constructor(res, error, message) {
    /** @private */
    this._res = res;
    this.ended = false;
    this.statusCode = 0;
    this.responseObject = {
      error: error,
      message: message
    };
  }

  /** @param {string} msg */
  msg(msg) {
    this.responseObject.message = msg;
    return this;
  }

  /** @param {{}} data */
  data(data) {
    if (this.responseObject.error) {
      this.responseObject.errorData = data;
    } else {
      this.responseObject.responseData = data;
    }
    return this;
  }

  /** @param {number} code */
  status(code) {
    this.statusCode = code;
    return this;
  }

  end() {
    this.ended = true;
    if (this.statusCode) this._res.status(this.statusCode);
    this._res.json(this.responseObject);
    return this._res;
  }
};
