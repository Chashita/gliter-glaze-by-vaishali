const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// GET all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

// POST create booking
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, date, time, notes, price, status } = req.body;
    const booking = await Booking.create({
      name,
      email,
      phone,
      service,
      date,
      time,
      notes,
      price,
      status: status || 'pending'
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH booking status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

