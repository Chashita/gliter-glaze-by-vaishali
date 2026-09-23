import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Services({ services = [] }) {
  return (
    <div className="services-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
      </div>

      <section className="section">
        <p className="section-subtitle">
          Discover our range of premium beauty services designed to make you shine
        </p>

        <div className="services-grid">
          {services.length > 0 ? (
            services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img src={service.image} alt={service.name} />
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <span className="service-price">₹{service.price.toLocaleString()}</span>
                  <Link to="/booking" style={{ display: 'block', marginTop: '1rem' }}>
                    <button style={{
                      width: '100%',
                      padding: '0.8rem',
                      background: 'transparent',
                      border: '2px solid #D4AF37',
                      color: '#D4AF37',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}>
                      Book Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <>
              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400" alt="Bridal Makeup" />
                <div className="service-info">
                  <h3>Bridal Makeup</h3>
                  <p>Complete bridal makeup with trial session</p>
                  <span className="service-price">₹15,000</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400" alt="Engagement Makeup" />
                <div className="service-info">
                  <h3>Engagement Makeup</h3>
                  <p>Glamorous engagement makeup look</p>
                  <span className="service-price">₹8,000</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400" alt="Party Makeup" />
                <div className="service-info">
                  <h3>Party Makeup</h3>
                  <p>Perfect party look for any occasion</p>
                  <span className="service-price">₹3,000</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1526045478516-99145907023c?w=400" alt="HD Makeup" />
                <div className="service-info">
                  <h3>HD Makeup</h3>
                  <p>High-definition makeup for photos & videos</p>
                  <span className="service-price">₹10,000</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400" alt="Hair Styling" />
                <div className="service-info">
                  <h3>Hair Styling</h3>
                  <p>Professional hair styling for all occasions</p>
                  <span className="service-price">₹2,500</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400" alt="Pre-Bridal Package" />
                <div className="service-info">
                  <h3>Pre-Bridal Package</h3>
                  <p>Complete pre-bridal skincare package</p>
                  <span className="service-price">₹12,000</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400" alt="Nail Art" />
                <div className="service-info">
                  <h3>Nail Art</h3>
                  <p>Exquisite nail art designs</p>
                  <span className="service-price">₹1,500</span>
                </div>
              </motion.div>

              <motion.div className="service-card" whileHover={{ y: -10 }}>
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400" alt="Facial & Skin Treatment" />
                <div className="service-info">
                  <h3>Facial & Skin Treatment</h3>
                  <p>Rejuvenating facial and skin treatments</p>
                  <span className="service-price">₹3,500</span>
                </div>
              </motion.div>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/pricing">
            <button className="cta-button">
              View Pricing Details 💰
            </button>
          </Link>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE4E9 100%)' }}>
        <h2 className="section-title">Special Offers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <motion.div 
            style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '3px solid #D4AF37',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#D4AF37',
              color: 'white',
              padding: '0.3rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              10% OFF
            </div>
            <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>Bridal Season Offer</h3>
            <p style={{ color: '#666' }}>Get 10% off on all bridal makeup packages during wedding season!</p>
          </motion.div>

          <motion.div 
            style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '3px solid #D4AF37'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>Combo Package</h3>
            <p style={{ color: '#666' }}>Bridal Makeup + Hair Styling + Saree Draping at special combo price!</p>
          </motion.div>

          <motion.div 
            style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '3px solid #D4AF37'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>Refer a Friend</h3>
            <p style={{ color: '#666' }}>Refer a friend and get ₹500 off on your next visit!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
