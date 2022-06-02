const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'xrate',
  column: 'id'
}, {
  name: 'code',
  table: 'xrate',
  column: 'currency'
}], {
  postProcess(result, xrate) {
    return Object.assign(result, {
      id:   xrate.id,
      code: xrate.currency
    });
  }
});
