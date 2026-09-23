const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, default: '' },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    notes: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);

