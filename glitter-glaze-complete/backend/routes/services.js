const express = require('express');
const Service = require('../models/Service');

const router = express.Router();

// GET all services
router.get('/', async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.json(services);
});

// POST create service
router.post('/', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const service = await Service.create({ name, price, description, image });
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update service by id
router.put('/:id', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image },
      { new: true }
    );

    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE service by id
router.delete('/:id', async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json({ ok: true });
});

module.exports = router;

