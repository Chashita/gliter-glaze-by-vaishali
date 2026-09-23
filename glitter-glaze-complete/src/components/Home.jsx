import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
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
              Book Now ✨
            </motion.button>
          </Link>
        </motion.div>

        <div className="hero-decoration" style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <span style={{ fontSize: '2rem', color: '#D4AF37' }}>👇</span>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Discover our premium beauty services</p>
        
        <div className="services-grid">
          <motion.div 
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400" alt="Bridal Makeup" />
            <div className="service-info">
              <h3>Bridal Makeup</h3>
              <p>Complete bridal makeup with trial session</p>
              <span className="service-price">₹30,000</span>
            </div>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400" alt="Engagement Makeup" />
            <div className="service-info">
              <h3>Engagement Makeup</h3>
              <p>Glamorous engagement makeup look</p>
              <span className="service-price">₹15,000</span>
            </div>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <img src="https://images.unsplash.com/photo-1526045478516-99145907023c?w=400" alt="HD Makeup" />
            <div className="service-info">
              <h3>HD Makeup</h3>
              <p>High-definition makeup for photos & videos</p>
              <span className="service-price">₹2,000</span>
            </div>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400" alt="Party Makeup" />
            <div className="service-info">
              <h3>Party Makeup</h3>
              <p>Perfect party look for any occasion</p>
              <span className="service-price">₹1,500</span>
            </div>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services">
            <button className="cta-button" style={{ background: 'transparent', border: '2px solid #D4AF37', color: '#D4AF37' }}>
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
