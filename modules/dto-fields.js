/**
 * @typedef {{
 *  name: string,
 *  table: string,
 *  column: string
 * }} Field
 */

module.exports = class DTOFields {
  /** @param {Field[]} fieldsList */
  constructor(fieldsList) {
    if (!Array.isArray(fieldsList)) throw new Error('fieldsList is required');

    this.list = fieldsList;
  }

  get(fname) {
    return this.list[this.list.findIndex((v) => v.name === fname)];
  }

  getStr(fname) {
    const f = this.get(fname);
    return `${f.table}_${f.column}`;
  }
}