import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
      </div>

      <section className="section">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500"
              alt="Vaishali - Founder"
              className="about-image"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Glitter Glaze by Vaishali</h3>
            <p>
              Welcome to Glitter Glaze by Vaishali, a premium beauty studio specializing in
              bridal and luxury makeup transformations. With years of experience in the beauty
              industry, we are dedicated to making every bride look absolutely stunning on her
              special day.
            </p>
            <p>
              Our founder, Vaishali, is a certified makeup artist with expertise in various
              makeup techniques including HD makeup, airbrush makeup, and traditional bridal
              makeup. She has transformed hundreds of brides and has built a reputation for
              delivering flawless, camera-ready looks.
            </p>
            <p>
              At Glitter Glaze, we believe every woman deserves to feel like a princess.
              Whether it's your wedding day, engagement, party, or any special occasion, we
              ensure you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section" style={{ background: 'rgba(255,228,233,0.3)' }}>
        <h2 className="section-title">Our Journey</h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '15px',
              marginBottom: '1rem',
              borderLeft: '4px solid #D4AF37',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#B8860B' }}>2025</h3>
            <p style={{ color: '#666' }}>
              Continuing to provide premium bridal makeup services with enhanced techniques
            </p>
          </motion.div>

          <motion.div
            style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '15px',
              marginBottom: '1rem',
              borderLeft: '4px solid #D4AF37',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{ color: '#B8860B' }}>2026</h3>
            <p style={{ color: '#666' }}>
              Excited to bring new beauty trends and transformations for our brides
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications & Training</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <motion.div
            style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#B8860B' }}>Certified Makeup Artist</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>International Academy of Makeup</p>
          </motion.div>

          <motion.div
            style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
            <h4 style={{ color: '#B8860B' }}>HD Makeup Specialist</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Temptu Airbrush Training</p>
          </motion.div>

          <motion.div
            style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💄</div>
            <h4 style={{ color: '#B8860B' }}>Bridal Expert</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>10+ Years Experience</p>
          </motion.div>

          <motion.div
            style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
            <h4 style={{ color: '#B8860B' }}>Brand Ambassador</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Premium Cosmetics Brand</p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section" style={{ background: 'rgba(212,175,55,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
          <h2 className="section-title">Ready to shine?</h2>
          <p style={{ color: '#666', marginTop: '1rem' }}>
            Book your appointment and let Glitter Glaze by Vaishali transform your special day.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="/booking" className="btn">Book Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

