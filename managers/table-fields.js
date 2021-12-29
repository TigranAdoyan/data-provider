/**
 * @typedef {{
 *  Field: string,
 *  Type: string,
 *  Null: string,
 *  Key: string,
 *  Default: string | null,
 *  Extra: string
 * }} FieldItem
 */

module.exports = class TableFields {
  /**
   * @param {string} db
   * @param {string} table
   * @param {FieldItem[]} fieldList
   */
  constructor(db, table, fieldList) {
    /** @private @type {Map<string, FieldItem>} */
    this.fieldList = new Map();
    /** @private @type {string} */
    this.table = table;
    /** @private @type {string} */
    this.db = db;

    fieldList.forEach(field => {
      this.fieldList.set(field.Field, field);
    });
  }

  /** @param {string} prefix */
  getPrefixed(prefix = null) {
    prefix = (prefix === null) ? this.table : prefix;
    let sql = '';
    for (const fieldItem of this.fieldList.values()) {
      sql += `\`${this.db}\`.\`${this.table}\`.${fieldItem.Field} AS ${prefix}_${fieldItem.Field}, `;
    }
    return sql.substr(0, sql.length - 3);
  }
}