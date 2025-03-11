// backend/models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_produto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_produto: {
    type: DataTypes.STRING,
  },
  preco_produto: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  estoque_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'produtos',
  timestamps: true,
});

module.exports = Product;