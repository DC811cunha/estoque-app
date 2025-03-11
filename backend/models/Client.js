// backend/models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone_cliente: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'clientes',
  timestamps: true,
});

module.exports = Client;