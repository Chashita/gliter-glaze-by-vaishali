import React from 'react';
import { motion } from 'framer-motion';

function Pricing({ services = [] }) {
  const defaultServices = [
    { id: 1, name: 'Bridal Makeup', price: 15000, popular: true },
    { id: 2, name: 'Engagement Makeup', price: 8000 },
    { id: 3, name: 'Party Makeup', price: 3000 },
    { id: 4, name: 'HD Makeup', price: 10000 },
    { id: 5, name: 'Hair Styling', price: 2500 },
    { id: 6, name: 'Pre-Bridal Package', price: 12000, offer: true },
    { id: 7, name: 'Nail Art', price: 1500 },
    { id: 8, name: 'Facial & Skin Treatment', price: 3500 },
    { id: 9, name: 'Saree Draping', price: 800 },
    { id: 10, name: 'Mehendi Artist', price: 2000 },
  ];

  const displayServices = services.length > 0 
    ? services.map(s => ({ ...s, popular: s.name === 'Bridal Makeup', offer: s.name === 'Pre-Bridal Package' }))
    : defaultServices;

  return (
    <div className="pricing-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pricing
        </motion.h1>
      </div>

      <section className="section">
        <p className="section-subtitle">
          Transparent pricing for all our premium services
        </p>

        {/* Special Offer Banner */}
        <motion.div 
          style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉 Wedding Season Offer!</h2>
          <p style={{ fontSize: '1.2rem' }}>Get 10% OFF on all Bridal Makeup bookings! Book now and save ₹1,500 on your bridal package.</p>
        </motion.div>

        <div className="pricing-table">
          <div className="pricing-header">
            <span>Service</span>
            <span>Price</span>
          </div>
          
          {displayServices.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`pricing-row ${service.popular ? 'most-booked' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div>
                <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{service.name}</span>
                {service.popular && (
                  <span className="offer-badge" style={{ background: '#28A745' }}>Most Booked</span>
                )}
                {service.offer && (
                  <span className="offer-badge">10% OFF</span>
                )}
              </div>
              <span className="price-amount">₹{service.price.toLocaleString()}</span>
            </motion.div>
          ))}
        </div>

        {/* Package Deals */}
        <h2 className="section-title" style={{ marginTop: '4rem' }}>Package Deals</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <motion.div 
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              border: '2px solid #D4AF37',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={{ color: '#B8860B', fontSize: '1.5rem', marginBottom: '1rem' }}>Silver Package</h3>
            <div style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700', marginBottom: '1rem' }}>
              ₹18,000
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', color: '#666' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ Bridal Makeup</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Hair Styling</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Free Trial Session</li>
            </ul>
          </motion.div>

          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE4E9 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              border: '3px solid #D4AF37',
              textAlign: 'center',
              position: 'relative'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#D4AF37',
              color: 'white',
              padding: '0.5rem 2rem',
              borderRadius: '20px',
              fontWeight: '600'
            }}>
              BEST VALUE
            </div>
            <h3 style={{ color: '#B8860B', fontSize: '1.5rem', marginBottom: '1rem' }}>Gold Package</h3>
            <div style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700', marginBottom: '1rem' }}>
              ₹25,000
              <span style={{ fontSize: '1rem', color: '#999', textDecoration: 'line-through' }}> ₹28,000</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', color: '#666' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ Bridal Makeup</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Hair Styling</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Saree Draping</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Free Trial Session</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Pre-Bridal Facial</li>
            </ul>
          </motion.div>

          <motion.div 
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              border: '2px solid #D4AF37',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={{ color: '#B8860B', fontSize: '1.5rem', marginBottom: '1rem' }}>Platinum Package</h3>
            <div style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700', marginBottom: '1rem' }}>
              ₹35,000
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', color: '#666' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ Premium Bridal Makeup</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Hair Styling</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Saree Draping</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Free Trial Session</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Full Pre-Bridal Package</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Nail Art</li>
            </ul>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/booking" className="cta-button">
            Book Your Package 🎊
          </a>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
