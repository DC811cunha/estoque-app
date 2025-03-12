// backend/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,   // Nome do banco (ex.: "estoque")
  process.env.DB_USER,   // Usuário
  process.env.DB_PASS,   // Senha
  {
    host: process.env.DB_HOST, // Ex.: "localhost"
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;