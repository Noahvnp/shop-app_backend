require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "shopapp",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.MYSQL_PORT || 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "shopapp",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.MYSQL_PORT || 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "shopapp",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.MYSQL_PORT || 3306,
    dialect: "mysql",
    logging: false,
  },
};
