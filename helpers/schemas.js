const joi = require('joi');

module.exports = {
  defaultFormat(project) {
    return joi.object().keys({
      timestamp: joi.date().raw(),
      bet: joi.number(),
      win: joi.number(),
      product: joi.string().valid(..._projects.getProjectGames(project.toUpperCase()))
    });
  }
}