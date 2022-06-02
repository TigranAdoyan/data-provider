const DTOFields = require('./dto-fields');

module.exports = class DTO {
  /**
   * @param {import('./dto-fields').Field[]} fields 
   * @param {Object} middlewares
   * @param {(result: {}, ...target: any[]) => ({})} middlewares.preProcess 
   * @param {(result: {}, ...target: any[]) => ({})} middlewares.postProcess 
   */
  constructor(fields, middlewares = {}) {
    /** @private */
    this._fields = new DTOFields(fields);

    /** 
     * @private 
     * @type {{
     *  preProcess: (result: {}, ...target: any) => ({}),
     *  postProcess: (result: {}, ...target: any) => ({})
     * }}
     */
    this._middlewares = Object.assign({
      preProcess: () => ({}),
      postProcess: r => r
    }, middlewares)

    const _this = this;

    /** @param {...any} target */
    function process(...target) {
      // const result = _this._fields.list.reduce((prev, curr) => {
      //   prev[curr.name] = target[_this._fields.getStr(curr.name)];
      //   return prev;
      // }, _this._middlewares.preProcess(target, {}));
      const result = {};

      return _this._middlewares.postProcess(result, ...target);
    }

    /**
     * @type {process(...target: any): {}}
     */
    this.process = process.bind(this);
  }

  getField(fname) {
    return this._fields.get(fname);
  }
};
