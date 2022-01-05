const defaultTemplate = require('../configs/db.js');

module.exports = {
  db: defaultTemplate,
  projects: require('../configs/projects.js'),
  connection: (db) => {
    defaultTemplate.mysql.connection.database = db;
    return defaultTemplate.mysql;
  }
};
