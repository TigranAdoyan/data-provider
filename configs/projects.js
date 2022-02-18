function typeCast(field, next) {
  if (field.type.toUpperCase() === 'BIT' && field.length == 1) {
      const bit = field.string();
      const b = (bit === null) ? null : bit.charCodeAt(0);
      return !!b;
  }
  return next();
}

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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
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
            typeCast
          }
        }
      }
    }
  }
};
