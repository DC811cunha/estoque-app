// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar um novo produto
router.post('/', async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      console.error("Erro ao criar produto:", err);
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;