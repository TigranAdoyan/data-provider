const { Knex } = require("knex");

module.exports = class Paginator {
  static defaultPage = 1;
  static defaultLimit = 25;
  static maxLimit = 500;

  /** @private @type {Knex.QueryBuilder} */
  _knexQueryBuilder;
  /** @private @type {number} */
  _page;
  /** @private @type {number} */
  _limit;

  constructor(knexQueryBuilder, page = Paginator.defaultPage, limit = Paginator.defaultLimit) {
    this._knexQueryBuilder = knexQueryBuilder;
    this.page(page);
    this.limit(limit);
  }

  page(page) {
    page = Number(page);
    this._page = (!page || page <= 0) ? 1 : page;
    return this;
  }

  limit(limit) {
    limit = Number(limit);
    this._limit = (limit > Paginator.maxLimit) ? Paginator.maxLimit : (!limit || limit <= 0) ? Paginator.defaultLimit : limit;
    return this;
  }

  /**
   * @template T
   * @returns {Promise<import("../types").PaginationResult<T>>} 
   */
  async then(cb) {
    const result = await this._knexQueryBuilder
      .offset(this._limit * (this._page - 1))
      .limit(this._limit);

    const total = await this._knexQueryBuilder.clearSelect().offset(0).count('*');

    cb({
      current_page: Number(this._page),
      total_pages: Math.ceil(total[0]['count(*)'] / this._limit),
      current_count: result.length,
      total_count: Number(total[0]['count(*)']),
      limit: Number(this._limit),
      data: result
    });
  }
};
