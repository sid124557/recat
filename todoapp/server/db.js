const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Alpha@001",
  host: "localhost",
  port: 5432,
  database: "pare_todos"
});

module.exports = pool;