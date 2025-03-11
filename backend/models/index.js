// backend/models/index.js
const sequelize = require('../config/database');
const Product = require('./Product');
const Client = require('./Client');
const Order = require('./Order');

// Relação: um pedido pertence a um cliente e a um produto
Order.belongsTo(Client, { foreignKey: 'cliente_id', as: 'cliente' });
Order.belongsTo(Product, { foreignKey: 'produto_id', as: 'produto' });

// Relação reversa (opcional, para consultas)
Client.hasMany(Order, { foreignKey: 'cliente_id', as: 'orders' });
Product.hasMany(Order, { foreignKey: 'produto_id', as: 'orders' });

module.exports = { sequelize, Product, Client, Order };
