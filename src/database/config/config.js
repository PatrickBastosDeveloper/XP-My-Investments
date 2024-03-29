require('dotenv').config();

module.exports = {
  'development': {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_PASSWORD,
    'database': process.env.MYSQL_DB,
    'host': process.env.MYSQL_HOST,
    'dialect': "mysql",
  },
  'production': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DB,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT,
  },
};
