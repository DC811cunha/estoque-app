// backend/tests/product.test.js
const request = require('supertest');
const app = require('../app');
const { Product, sequelize } = require('../models');

describe('Product API', () => {
  // Antes de todos os testes, sincroniza o banco (force: true recria as tabelas)
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  // Fecha a conexão após os testes
  afterAll(async () => {
    await sequelize.close();
  });

  it('deve criar um novo produto', async () => {
    const response = await request(app)
      .post('/api/produtos')
      .send({
        nome: 'Produto Teste',
        descricao: 'Descrição do produto teste',
        preco: 10.99,
        estoque: 100
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Produto Teste');
  });
});