require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la BD:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

module.exports = connection;
