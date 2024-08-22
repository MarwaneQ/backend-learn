const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost", // HOST NAME
  user: "root", // USER NAME
  database: "node", // DATABASE NAME
  password: "lecf.313Dev", // PASSWORD
});

module.exports = pool.promise();