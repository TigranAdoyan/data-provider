module.exports = {
  list: {
    PMBETTZ: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    VAMOSETH: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    HABESHAETH: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    PMBETKE: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    PMBETZM: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    MLOTT: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    TOTOBOOM: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    BETWIM: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    YULDUZBET: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    CASHBAHIS: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    PMBETNG: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    },
    SHOOT: {
      db: {
        mysql: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_DB,
            typeCast: (field, next) => {
              if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
                  const bit = field.string();
                  const b = (bit === null) ? null : bit.charCodeAt(0);
                  return !!b;
              }
              return next();
            }
          }
        }
      }
    }
  }
};
