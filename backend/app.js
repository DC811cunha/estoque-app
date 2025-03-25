// Arquivo principal do Express, que configura middlewares e rotas.
// backend/app.js
const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Importa as rotas
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

// Define os endpoints
app.use('/api/produtos', productRoutes);
app.use('/api/clientes', clientRoutes);
app.use('/api/pedidos', orderRoutes);
app.use('/api/usuarios', userRoutes);

module.exports = app;