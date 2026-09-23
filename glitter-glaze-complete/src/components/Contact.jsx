import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
      </div>

      <section className="section">
        <p className="section-subtitle">
          We'd love to hear from you
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 style={{ color: '#B8860B', marginBottom: '1.5rem' }}>Get In Touch</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4 style={{ color: '#2D2D2D', marginBottom: '0.3rem' }}>Studio Address</h4>
                  <p style={{ color: '#666' }}>
                    Glitter Glaze by Vaishali<br />
                    623 New Diwan Nagar, Katcha Camp, PNP
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4 style={{ color: '#2D2D2D', marginBottom: '0.3rem' }}>Phone</h4>
                  <p style={{ color: '#666' }}>+91 92207 00009</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4 style={{ color: '#2D2D2D', marginBottom: '0.3rem' }}>Studio Hours</h4>
                  <p style={{ color: '#666' }}>
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>

              <a 
                href="https://wa.me/919220700009" 
                className="whatsapp-button"
                style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '1rem' }}
              >
                💬 Chat on WhatsApp
              </a>

              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ color: '#2D2D2D', marginBottom: '1rem' }}>Follow Us</h4>
                <div className="footer-social">
                  <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>📘</a>
                  <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>📸</a>
                  <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>🐦</a>
                  <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>▶️</a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="map-container" style={{
              background: 'linear-gradient(135deg, #FFE4E9 0%, #FFF8F0 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
              <p style={{ color: '#666', textAlign: 'center' }}>
                Our Studio Location
              </p>

              <div style={{ width: '100%', maxWidth: '600px', padding: '0 1rem 1rem' }}>
                {/* Permanent Location (Google Maps Embed) */}
                <iframe
                  title="Glitter Glaze Studio Location"
                  width="100%"
                  height="320"
                  loading="lazy"
                  style={{ border: 0, borderRadius: '15px' }}
                  src="https://www.google.com/maps?q=Glitter%20Glaze%20by%20Vaishali%2C%20623%20New%20Diwan%20Nagar%2C%20Katcha%20Camp%2C%20PNP&output=embed"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps?q=Glitter%20Glaze%20by%20Vaishali%2C%20623%20New%20Diwan%20Nagar%2C%20Katcha%20Camp%2C%20PNP"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: '1rem',
                  padding: '0.8rem 2rem',
                  background: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Open in Google Maps
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'rgba(255,228,233,0.3)' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
          {[
            {
              q: 'How do I book an appointment?',
              a: 'You can book an appointment through our online booking system, or call us directly at +91 92207 00009.'
            },
            {
              q: 'How far in advance should I book?',
              a: 'We recommend booking at least 2-4 weeks in advance for bridal makeup, especially during wedding season. For other services, 1 week advance booking is sufficient.'
            },
            {
              q: 'Do you provide trial sessions?',
              a: 'Yes! We offer trial sessions for bridal makeup. The trial fee can be adjusted against your final booking.'
            },
            {
              q: 'What products do you use?',
              a: 'We use only premium, high-quality products from renowned brands like MAC, Makeup Forever, Huda Beauty, and more.'
            },
            {
              q: 'Do you travel for destination weddings?',
              a: 'Yes, we do provide services for destination weddings. Additional travel charges may apply based on the location.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '1rem',
                borderLeft: '4px solid #D4AF37'
              }}
            >
              <h4 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>{faq.q}</h4>
              <p style={{ color: '#666' }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
