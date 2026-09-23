import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Glitter Glaze by Vaishali</div>
      
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} style={{
        display: 'none',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer'
      }}>
        ☰
      </button>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/booking">Book Now</Link></li>
        <li><Link to="/testimonials">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin" style={{ color: '#D4AF37' }}>Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
