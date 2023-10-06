require("dotenv").config();

const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DP_PORT } = process.env;

const db = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DP_PORT),
});

module.exports = db;
