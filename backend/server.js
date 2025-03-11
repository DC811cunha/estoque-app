// backend/server.js
const app = require('./app');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 3000;

// Sincroniza os modelos com o banco (cuidado: force: true recria as tabelas)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});