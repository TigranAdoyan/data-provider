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

  fieldsArr() {
    return Array.from(this.fieldList.keys());
  }

  fieldsObj() {
    return Object.fromEntries(this.fieldList.entries());
  }

  /** 
   * @param {{
   *  prefix: string,
   *  table: string,
   *  db: string
   * }}
   */
  getPrefixed({prefix, table, db} = {}) {
    prefix = (prefix === undefined) ? this.table : prefix;
    table  = (table === undefined)  ? this.table : table;
    db     = (db === undefined)     ? this.db    : db;
    let sql = '';
    for (const fieldItem of this.fieldList.values()) {
      sql += `\`${db}\`.\`${table}\`.${fieldItem.Field} AS ${prefix}_${fieldItem.Field}, `;
    }
    return sql ? sql.substr(0, sql.length - 2) : '';
  }

  /** 
   * @param {{
   *  prefix: string,
   *  table: string,
   *  db: string
   * }}
   * @param {string[]} fieldsArr
   */
  getPrefixedByArr({prefix, table, db} = {}, fieldsArr = []) {
    prefix = (prefix === undefined) ? this.table : prefix;
    table  = (table === undefined)  ? this.table : table;
    db     = (db === undefined)     ? this.db    : db;
    let sql = '';
    for (const field of fieldsArr) {
      if (this.fieldList.has(field)) {
        sql += `\`${db}\`.\`${table}\`.${field} AS ${prefix}_${field}, `;
      }
    }
    return sql ? sql.substr(0, sql.length - 2) : '';
  }

  /** 
   * @param {{
   *  prefix: string,
   *  table: string,
   *  db: string
   * }}
   * @param {string[]} fieldsArr
   */
  getPrefixedExceptArr({prefix, table, db} = {}, fieldsArr = []) {
    prefix = (prefix === undefined) ? this.table : prefix;
    table  = (table === undefined)  ? this.table : table;
    db     = (db === undefined)     ? this.db    : db;
    let sql = '';
    for (const fieldItem of this.fieldList.values()) {
      if (!fieldsArr.includes(fieldItem.Field)) {
        sql += `\`${db}\`.\`${table}\`.${fieldItem.Field} AS ${prefix}_${fieldItem.Field}, `;
      }
    }
    return sql ? sql.substr(0, sql.length - 2) : '';
  }
};
