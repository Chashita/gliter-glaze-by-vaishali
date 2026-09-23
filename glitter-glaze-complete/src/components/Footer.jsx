import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Glitter Glaze by Vaishali</h3>
          <p style={{ opacity: 0.9, marginTop: '1rem' }}>
            Enhancing your beauty with elegance & perfection. 
            Your trusted partner for all bridal and party makeup needs.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>📘</a>
            <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>📸</a>
            <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>🐦</a>
            <a href="#" className="social-icon" style={{ textDecoration: 'none' }}>▶️</a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
          <ul className="footer-links">
            <li style={{ marginBottom: '0.5rem' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/booking" style={{ color: 'white', textDecoration: 'none' }}>Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Services</h4>
          <ul className="footer-links">
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Bridal Makeup</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Engagement Makeup</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Party Makeup</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>HD Makeup</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Hair Styling</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Pre-Bridal Package</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Contact Info</h4>
          <ul className="footer-links">
            <li style={{ marginBottom: '0.5rem' }}>📍 623 New Diwan Nagar, Katcha Camp, PNP</li>
            <li style={{ marginBottom: '0.5rem' }}>📱 +91 92207 00009</li>
            <li style={{ marginBottom: '0.5rem' }}>🕐 Mon - Sat: 9AM - 7PM</li>
          </ul>
          <a 
            href="https://wa.me/919220700009" 
            style={{ 
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.8rem 1.5rem',
              background: '#25D366',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600'
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Glitter Glaze by Vaishali. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
          Made with 💖 for the most beautiful brides
        </p>
      </div>
    </footer>
  );
}

export default Footer;
