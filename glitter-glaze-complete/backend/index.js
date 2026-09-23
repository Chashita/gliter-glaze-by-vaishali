const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { corsOptions } = require('./cors');
const mongoose = require('mongoose');

const serviceRoutes = require('./routes/services');
const bookingRoutes = require('./routes/bookings');

dotenv.config();

const app = express();
app.use(cors(corsOptions));

// Seed only if collections are empty
// Run with: SEED_DB=true npm run dev
if (process.env.SEED_DB === 'true') {
  // seed() exits the process after seeding; intended for one-time use
  require('./seed');
}

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/glitter-glaze';
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');

    app.get('/health', (req, res) => res.json({ ok: true }));

    app.use('/api/services', serviceRoutes);
    app.use('/api/bookings', bookingRoutes);

    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();

