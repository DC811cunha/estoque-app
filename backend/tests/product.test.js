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
        nome_produto: 'Produto Teste',
        descricao_produto: 'Descrição do produto teste',
        preco_produto: 10.99,
        estoque_produto: 100
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id_produto');
    expect(response.body.nome_produto).toBe('Produto Teste');
  });
});