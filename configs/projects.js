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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno",
        "turbowof"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno",
        "turbowof"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno",
        "turbowof"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
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
      },
      games: [
        "sport",
        "keno",
        "wof",
        "colorboom",
        "toto",
        "casino",
        "turbokeno"
      ]
    }
  }
};
