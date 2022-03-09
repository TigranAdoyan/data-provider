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

const { Knex } = require("knex");

module.exports = class TableFields {
  /**
   * @param {string} db
   * @param {string} table
   * @param {FieldItem[]} fieldList
   */
  constructor(knex, db, table, fieldList = null) {
    /** @private @type {Knex} */
    this.knex = knex;
    /** @private @type {Map<string, FieldItem>} */
    this.fieldList = new Map();
    /** @private @type {string} */
    this.table = table;
    /** @private @type {string} */
    this.db = db;

    fieldList && fieldList.forEach(field => {
      this.fieldList.set(field.Field, field);
    });
  }

  async loadFields() {
    const fieldList = (await this.knex.raw(`SHOW COLUMNS FROM ${this.db}.${this.table}`))[0];
    fieldList.forEach(field => {
      this.fieldList.set(field.Field, field);
    });
    return this;
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
   *  db: string,
   *  quote: string
   * }}
   */
  getPrefixed({prefix, table, db, quote} = {}) {
    prefix = (prefix  === undefined)  ? this.table  : prefix;
    table  = (table   === undefined)  ? this.table  : table;
    db     = (db      === undefined)  ? this.db     : db;
    quote  = (quote   === undefined)  ? ''          : '`';

    const fieldArr = [];
    for (const fieldItem of this.fieldList.values()) {
      fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${fieldItem.Field} AS ${prefix}_${fieldItem.Field}`);
    }
    return fieldArr;
  }

  /** 
   * @param {{
   *  prefix: string,
   *  table: string,
   *  db: string,
   *  quote: string
   * }}
   * @param {string[]} fieldsArr
   */
  getPrefixedByArr({prefix, table, db, quote} = {}, fieldsArr = []) {
    prefix = (prefix  === undefined)  ? this.table  : prefix;
    table  = (table   === undefined)  ? this.table  : table;
    db     = (db      === undefined)  ? this.db     : db;
    quote  = (quote   === undefined)  ? ''          : '`';

    const fieldArr = [];
    for (const field of fieldsArr) {
      if (this.fieldList.has(field)) {
        fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${field} AS ${prefix}_${field}`);
      }
    }
    return fieldArr;
  }

  /** 
   * @param {{
   *  prefix?: string,
   *  table?: string,
   *  db?: string,
   *  quote?: string
   * }}
   * @param {string[]} fieldsArr
   */
  getPrefixedExceptArr({prefix, table, db, quote} = {}, fieldsArr = []) {
    prefix = (prefix  === undefined)  ? this.table  : prefix;
    table  = (table   === undefined)  ? this.table  : table;
    db     = (db      === undefined)  ? this.db     : db;
    quote  = (quote   === undefined)  ? ''          : '`';
    
    const fieldArr = [];
    for (const fieldItem of this.fieldList.values()) {
      if (!fieldsArr.includes(fieldItem.Field)) {
        fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${fieldItem.Field} AS ${prefix}_${fieldItem.Field}`);
      }
    }
    return fieldArr;
  }

  /** 
   * @param {{
   *  table: string,
   *  db: string,
   *  quote: string
   * }}
   */
  getRaw({table, db, quote} = {}) {
    table   = (table   === undefined)  ? this.table  : table;
    db      = (db      === undefined)  ? this.db     : db;
    quote   = (quote   === undefined)  ? ''          : '`';

    const fieldArr = [];
    for (const fieldItem of this.fieldList.values()) {
      fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${fieldItem.Field} AS ${fieldItem.Field}`);
    }
    return fieldArr;
  }

  /** 
   * @param {{
   *  table: string,
   *  db: string,
   *  quote: string
   * }}
   * @param {string[]} fieldsArr
   */
  getRawByArr({table, db, quote} = {}, fieldsArr = []) {
    table   = (table   === undefined)  ? this.table  : table;
    db      = (db      === undefined)  ? this.db     : db;
    quote   = (quote   === undefined)  ? ''          : '`';

    const fieldArr = [];
    for (const field of fieldsArr) {
      if (this.fieldList.has(field)) {
        fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${field} AS ${field}`);
      }
    }
    return fieldArr;
  }

  /** 
   * @param {{
   *  table?: string,
   *  db?: string,
   *  quote?: string
   * }}
   * @param {string[]} fieldsArr
   */
  getRawExceptArr({table, db, quote} = {}, fieldsArr = []) {
    table   = (table   === undefined)  ? this.table  : table;
    db      = (db      === undefined)  ? this.db     : db;
    quote   = (quote   === undefined)  ? ''          : '`';
    
    const fieldArr = [];
    for (const fieldItem of this.fieldList.values()) {
      if (!fieldsArr.includes(fieldItem.Field)) {
        fieldArr.push(`${quote}${db}${quote}.${quote}${table}${quote}.${fieldItem.Field} AS ${fieldItem.Field}`);
      }
    }
    return fieldArr;
  }
};
