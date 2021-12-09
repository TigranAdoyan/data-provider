const {header} = require('express-validator');
const validator = require('../middlewares/validator');

/**
 * @returns {import('express').RequestHandler[]}
 */
module.exports = [
  header('project').exists().toUpperCase().isIn(_projects.getNames()),
  validator
];
