const Pool = require('pg').Pool;

const client = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'nocache',
});

module.exports = client;
