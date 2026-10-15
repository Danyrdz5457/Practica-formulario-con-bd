const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosControlador');

router.post('/pedido', pedidosController.registrarPedido);
router.get('/pedido/:id', pedidosController.obtenerPedido);

module.exports = router;
