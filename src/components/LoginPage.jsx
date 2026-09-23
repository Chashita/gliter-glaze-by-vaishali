import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ADMIN_PASSWORD = 'admin123';
const API_BASE = 'http://localhost:5000';

function LoginPage({ onUserLogin, onAdminLogin, onError }) {
  const [mode, setMode] = useState('select'); // 'select' | 'user' | 'admin'
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // User registration/login fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  // Admin login fields
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let endpoint = authMode === 'register' ? '/api/auth/register' : '/api/auth/login';
      let payload = { email: form.email, password: form.password };
      if (authMode === 'register') {
        payload = { name: form.name, email: form.email, phone: form.phone, password: form.password };
      }

      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      // Success - pass the logged-in user data to App
      onUserLogin(data);
    } catch (err) {
      setError('Could not connect to the server. Please try again.');
      setLoading(false);
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      onAdminLogin();
    } else {
      setAdminError('Incorrect admin password. Access denied.');
      setAdminPassword('');
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setError('');
    setAdminError('');
    setForm({ name: '', email: '', phone: '', password: '' });
    setAdminPassword('');
  };

  return (
    <div className="login-page">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="login-logo">
          <span style={{ fontSize: '3rem' }}>💄</span>
        </div>
        <h1 className="login-title">Glitter Glaze by Vaishali</h1>
        <p className="login-subtitle">Premium Bridal & Luxury Makeup Studio</p>

        {/* Role selection */}
        {mode === 'select' && (
          <div className="login-options">
            <motion.button
              className="login-option-btn user-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => switchMode('user')}
            >
              <span className="login-option-icon">👩</span>
              <span>
                <strong>Login / Register</strong>
                <br />
                <small>For customers to book appointments</small>
              </span>
            </motion.button>

            <motion.button
              className="login-option-btn admin-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => switchMode('admin')}
            >
              <span className="login-option-icon">🔒</span>
              <span>
                <strong>Login as Admin</strong>
                <br />
                <small>Manage bookings & services</small>
              </span>
            </motion.button>
          </div>
        )}

        {/* User login/register */}
        {mode === 'user' && (
          <div className="login-form">
            <div className="auth-tabs">
              <button
                className={`auth-tab ${authMode === 'login' ? 'active' : ''}`}
                onClick={() => { setAuthMode('login'); setError(''); }}
              >
                Login
              </button>
              <button
                className={`auth-tab ${authMode === 'register' ? 'active' : ''}`}
                onClick={() => { setAuthMode('register'); setError(''); }}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleUserSubmit}>
              {authMode === 'register' && (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </>
              )}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={updateField}
                  placeholder={authMode === 'register' ? 'Create a password' : 'Enter your password'}
                  required
                />
              </div>

              {(error || (onError && authMode === 'login')) && (
                <p style={{ color: '#DC3545', marginTop: '0.5rem', textAlign: 'center' }}>
                  {error}
                </p>
              )}

              <button type="submit" className="submit-button" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                {loading
                  ? 'Please wait...'
                  : authMode === 'register' ? 'Create Account' : 'Login'}
              </button>
            </form>

            <button
              type="button"
              onClick={() => switchMode('select')}
              style={{
                width: '100%',
                marginTop: '0.75rem',
                padding: '0.8rem',
                background: 'transparent',
                border: '2px solid #666',
                color: '#666',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              ← Back
            </button>
          </div>
        )}

        {/* Admin login */}
        {mode === 'admin' && (
          <form onSubmit={handleAdminSubmit} className="login-form">
            <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>🔒 Admin Access</h3>
            <div className="form-group">
              <label>Admin Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                placeholder="Enter admin password"
                autoFocus
                required
              />
            </div>
            {adminError && (
              <p style={{ color: '#DC3545', marginTop: '0.5rem', textAlign: 'center' }}>
                {adminError}
              </p>
            )}
            <button type="submit" className="submit-button" style={{ width: '100%', marginTop: '1rem' }}>
              Login as Admin
            </button>
            <button
              type="button"
              onClick={() => switchMode('select')}
              style={{
                width: '100%',
                marginTop: '0.75rem',
                padding: '0.8rem',
                background: 'transparent',
                border: '2px solid #666',
                color: '#666',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              ← Back
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default LoginPage;
