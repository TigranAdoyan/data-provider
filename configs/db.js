module.exports = {
  mysql: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      typeCast: (field, next) => {
        if (field.type.toUpperCase() === 'BIT' && field.length === 1) {
            const bit = field.string();
            const b = (bit === null) ? null : bit.charCodeAt(0);
            return !!b;
        }
        return next();
      }
    }
  }
};
