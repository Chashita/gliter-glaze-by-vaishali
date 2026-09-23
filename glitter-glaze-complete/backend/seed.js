const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Service = require('./models/Service');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/glitter-glaze';

async function seed() {
  await mongoose.connect(MONGODB_URI);

  const existing = await Service.countDocuments();
  if (existing > 0) {
    console.log('Services already seeded');
    process.exit(0);
  }

  const services = [
    { name: 'Bridal Makeup', price: 30000, description: 'Complete bridal makeup with trial session', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400' },
    { name: 'Engagement Makeup', price: 15000, description: 'Glamorous engagement makeup look', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400' },
    { name: 'Party Makeup', price: 1500, description: 'Perfect party look for any occasion', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400' },
    { name: 'HD Makeup', price: 2000, description: 'High-definition makeup for photos & videos', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=400' },
    { name: 'Hair Styling', price: 2500, description: 'Professional hair styling for all occasions', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
    { name: 'Pre-Bridal Package', price: 12000, description: 'Complete pre-bridal skincare package', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400' },
    { name: 'Nail Art', price: 1500, description: 'Exquisite nail art designs', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400' },
    { name: 'Facial & Skin Treatment', price: 3500, description: 'Rejuvenating facial and skin treatments', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400' },
  ];

  await Service.insertMany(services);
  console.log('Seeded services');
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});

