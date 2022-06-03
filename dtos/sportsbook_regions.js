/**
 * @typedef {import('../types/db').Fm_pre_country} Country
 */

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'fm_pre_country',
  column: 'id'
}, {
  name: 'name',
  table: 'fm_pre_country',
  column: 'title'
}], {
  /** @param {Country} fpc */
  postProcess(result, fpc) {
    return Object.assign(result, {
      id:   fpc.id,
      name: fpc.title
    });
  }
});
