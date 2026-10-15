const pedidoModel = require('../Models/pedidoModel');

const TAMANIOS = ['Pequeño', 'Mediano', 'Grande'];

async function registrarPedido(req, res) {
  try {
    const cliente = req.body.nombre;
    const correo = req.body.correo;
    const producto = req.body.producto;
    const cantidad = Number(req.body.cantidad);
    const tamanio = req.body.tamano;
    const llevar = req.body.llevar === 'Sí' ? 'Sí' : 'No';
    const observaciones = req.body.observaciones || '';

    // Validación en el servidor (por si se salta la del navegador)
    const correoValido = typeof correo === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());

    if (typeof cliente !== 'string' || !cliente.trim() || cliente.trim().length > 100 ||
        !correoValido || correo.trim().length > 150 ||
        typeof producto !== 'string' || !producto.trim() || producto.trim().length > 50 ||
        !Number.isInteger(cantidad) || cantidad < 1 ||
        !TAMANIOS.includes(tamanio) ||
        typeof observaciones !== 'string') {
      return res.status(400).send('Datos del pedido son invalidos');
    }

    const id = await pedidoModel.registrarPedido(
      cliente.trim(),
      correo.trim(),
      producto.trim(),
      cantidad,
      tamanio,
      llevar,
      observaciones.trim()
    );

    // Pedido guardado: mostramos el resumen
    res.redirect(303, '/resumen.html?id=' + id);
  } catch (error) {
    console.error('Error al registrar pedido:', error);
    res.status(500).send('Error al guardar el pedido');
  }
}

async function obtenerPedido(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: 'Id invalido' });
    }

    const pedido = await pedidoModel.obtenerPedido(id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    console.error('Error al consultar pedido:', error);
    res.status(500).json({ error: 'Error al consultar el pedido' });
  }
}

module.exports = {
  registrarPedido,
  obtenerPedido
};
