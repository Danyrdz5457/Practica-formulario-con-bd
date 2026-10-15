// Conexión a la base de datos
const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool: reutiliza conexiones en lugar de abrir una nueva por cada pedido
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
