const pool = require('../config/database');

// Guarda un pedido y regresa el id que le asignó la BD
async function registrarPedido(cliente, correo, producto, cantidad, tamanio, llevar, observaciones) {
  const sql = `
    INSERT INTO pedidos (cliente, correo, producto, cantidad, tamanio, llevar, observaciones)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const [resultado] = await pool.execute(sql, [
    cliente,
    correo,
    producto,
    cantidad,
    tamanio,
    llevar,
    observaciones
  ]);
  return resultado.insertId;
}

// Busca un pedido por id (para mostrar el resumen)
async function obtenerPedido(id) {
  const sql = `
    SELECT id, cliente, correo, producto, cantidad, tamanio, llevar, observaciones, fecha_registro
    FROM pedidos
    WHERE id = ?`;

  const [filas] = await pool.execute(sql, [id]);
  return filas[0] || null;
}

module.exports = {
  registrarPedido,
  obtenerPedido
};
