// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { Order, Product, sequelize } = require('../models');

// Listar todos os pedidos com informações de cliente e produto
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: ['cliente', 'produto'],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar um novo pedido
router.post('/', async (req, res) => {
  const { cliente_id, produto_id, quantidade } = req.body;
  const t = await sequelize.transaction();

  try {
    // Verifica se o produto existe e se há estoque suficiente
    const product = await Product.findByPk(produto_id, { transaction: t });
    if (!product) throw new Error('Produto não encontrado');
    if (product.estoque < quantidade) throw new Error('Estoque insuficiente');

    // Atualiza o estoque
    product.estoque -= quantidade;
    await product.save({ transaction: t });

    // Calcula o valor total do pedido
    const valor_total = quantidade * parseFloat(product.preco);

    // Cria o pedido
    const order = await Order.create({
      cliente_id,
      produto_id,
      quantidade,
      valor_total,
      data_pedido: new Date()
    }, { transaction: t });

    await t.commit();
    res.status(201).json(order);
  } catch (err) {
    await t.rollback();
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;