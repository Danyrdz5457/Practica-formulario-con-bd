const express = require('express');
const path = require('path');
require('dotenv').config();

const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

// Para leer los datos que manda el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sirve el frontend (practica.html, resumen.html, css y js)
app.use(express.static(path.join(__dirname, '../frontred')));

app.get('/', (req, res) => {
  res.redirect('/practica.html');
});

app.use('/', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor ejecutándose en http://localhost:' + PORT);
});
