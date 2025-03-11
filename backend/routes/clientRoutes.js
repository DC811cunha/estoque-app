// backend/routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const { Client } = require('../models');

// Listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar um novo cliente
router.post('/', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;