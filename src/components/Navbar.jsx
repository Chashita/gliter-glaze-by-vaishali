import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ role, user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) onLogout();
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

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
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
        <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
        <li><Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link></li>
        <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
        <li><Link to="/booking" className={isActive('/booking') ? 'active' : ''}>Book Now</Link></li>
        <li><Link to="/testimonials" className={isActive('/testimonials') ? 'active' : ''}>Reviews</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
{role === 'admin' && (
          <li><Link to="/admin" className={isActive('/admin') ? 'active' : ''} style={{ color: isActive('/admin') ? '#fff' : '#D4AF37' }}>Admin</Link></li>
        )}
      </ul>
      <div className="nav-user">
<span className="nav-role-badge">
          {role === 'admin' ? '👑 Admin' : `👤 ${user?.name || 'User'}`}
        </span>
        <button onClick={handleLogout} className="nav-logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
