 import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ services = [] }) {
  // Fallback cards shown only if backend has no services yet
  const fallbackServices = [
    { id: 1, name: 'Bridal Makeup', price: 30000, description: 'Complete bridal makeup with trial session', image: 'https://i.pinimg.com/736x/9c/5f/2b/9c5f2b032c561377ba8d7524045e4c19.jpg' },
    { id: 2, name: 'Engagement Makeup', price: 8000, description: 'HD makeup with natural glowing look - includes hairstyle, colored lenses & eyelashes', image: 'https://bridal-makeup.in/images/spsimpleportfolio/bridal-makeup-all/low-res/engagement-bridal-makeup.webp' },
    { id: 3, name: 'HD Makeup', price: 2000, description: 'High-definition makeup for photos & videos', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=400' },
    { id: 4, name: 'Party Makeup', price: 1500, description: 'Perfect party look for any occasion', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400' },
    { id: 5, name: 'Hair Styling', price: 2500, description: 'Professional hair styling for all occasions', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
    { id: 6, name: 'Pre-Bridal Package', price: 12000, description: 'Complete pre-bridal skincare package', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400' },
  ];

  // Live services from backend (edited by admin) always take priority
  const displayServices = services.length > 0 ? services.slice(0, 6) : fallbackServices;

  return (
    <div className="home">
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Glitter Glaze by Vaishali</h1>
          <p className="tagline">"Enhancing your beauty with elegance & perfection"</p>
          <Link to="/booking">
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
Book Now
            </motion.button>
          </Link>
        </motion.div>

        
      </section>

{/* Featured Services Preview */}
      <section className="section" style={{ paddingTop: '0.5rem' }}>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Discover our premium beauty services</p>
        
        <div className="services-grid">
          {displayServices.map((service) => (
            <motion.div
              key={service._id || service.id}
              className="service-card"
              whileHover={{ y: -10 }}
            >
              <img src={service.image || 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400'} alt={service.name} />
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-price">₹{service.price.toLocaleString()}</span>
              </div>
            </motion.div>
          ))}
        </div>

<div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services">
            <button className="cta-button" style={{ 
              background: 'linear-gradient(135deg, #E8A0BF 0%, #C2185B 100%)', 
              border: 'none', 
              color: 'white',
              boxShadow: '0 4px 15px rgba(194, 24, 91, 0.4)'
            }}>
View All Services
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'rgba(255,228,233,0.3)' }}>
        <h2 className="section-title">Why Choose Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <motion.div 
            style={{ textAlign: 'center', padding: '2rem' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
            <h3 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>Premium Quality</h3>
            <p style={{ color: '#666' }}>Only the best products for your beauty</p>
          </motion.div>

          <motion.div 
            style={{ textAlign: 'center', padding: '2rem' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👑</div>
            <h3 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>Expert Artist</h3>
            <p style={{ color: '#666' }}>Years of experience in bridal makeup</p>
          </motion.div>

          <motion.div 
            style={{ textAlign: 'center', padding: '2rem' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>Luxury Experience</h3>
            <p style={{ color: '#666' }}>Relax in our premium studio</p>
          </motion.div>

          <motion.div 
            style={{ textAlign: 'center', padding: '2rem' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
            <h3 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>Photo-Ready</h3>
            <p style={{ color: '#666' }}>Perfect for HD cameras & photoshoots</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Ready to Shine?</h2>
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Book your appointment today and let us make you look stunning!
        </p>
        <Link to="/booking">
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment 💅
          </motion.button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
