// backend/tests/user.test.js
const request = require('supertest');
const app = require('../app');
const { User, sequelize } = require('../models');

describe('User API', () => {
  // Antes de todos os testes, sincroniza o banco (force: true recria as tabelas)
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  // Fecha a conexão após os testes
  afterAll(async () => {
    await sequelize.close();
  });

  it('deve criar um novo usuario', async () => {
    const response = await request(app)
      .post('/api/usuarios')
      .send({
        nome_usuario: 'Usuario Teste',
        senha_usuario: 'Senha Teste',
      });
    console.log(response.body);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id_usuario');
    expect(response.body.nome_usuario).toBe('Usuario Teste');
    expect(response.body.senha_usuario).toBe('Senha Teste');
  });
});