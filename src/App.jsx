import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
const [role, setRole] = useState(() => {
    return sessionStorage.getItem('glitter_role') || '';
  });
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('glitter_user') || 'null');
    } catch {
      return null;
    }
  });

  const API_BASE = 'http://localhost:5000';
  const STORAGE_KEY = 'glitter_glaze_bookings';

  // Load saved bookings from localStorage so data survives refresh
  const loadLocalBookings = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  // Save bookings to localStorage as a backup
  const saveLocalBookings = (list) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  };

  const refreshServices = async () => {
    const res = await fetch(`${API_BASE}/api/services`);
    const data = await res.json();
    setServices(data);
  };

  const refreshBookings = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/bookings`);
      if (!res.ok) throw new Error('Bad response');
      const data = await res.json();
      setBookings(data);
      // Also back up backend data to localStorage
      saveLocalBookings(data);
    } catch (err) {
      // Backend unavailable: use data saved in localStorage so refresh doesn't lose it
      console.warn('Backend unavailable, loading from localStorage:', err.message);
      setBookings(loadLocalBookings());
    }
  };

  useEffect(() => {
    refreshServices();
    refreshBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBooking = async (booking) => {
    try {
      // Save to backend (MongoDB)
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error('Backend booking failed');
      await refreshBookings();
    } catch (err) {
      // Fallback: add to local state + localStorage if backend is unavailable
      console.warn('Backend unavailable, saving locally:', err.message);
      const tempBooking = {
        _id: 'local_' + Date.now(),
        ...booking,
        status: 'pending'
      };
      setBookings(prev => {
        const updated = [tempBooking, ...prev];
        saveLocalBookings(updated);
        return updated;
      });
    }
  };

  const updateBookingStatus = async (id, status) => {
    // If it's a locally-created booking (backend was down), just update locally
    if (typeof id === 'string' && (id.startsWith('local_') || id.startsWith('id'))) {
      setBookings(prev => {
        const updated = prev.map(b =>
          b._id === id ? { ...b, status } : b
        );
        saveLocalBookings(updated);
        return updated;
      });
      return;
    }
    try {
      // Save to backend (MongoDB)
      await fetch(`${API_BASE}/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      await refreshBookings();
    } catch (err) {
      console.warn('Backend unavailable, updating locally:', err.message);
      setBookings(prev => {
        const updated = prev.map(b =>
          b._id === id ? { ...b, status } : b
        );
        saveLocalBookings(updated);
        return updated;
      });
    }
  };

  const updateService = async (id, updatedService) => {
    await fetch(`${API_BASE}/api/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedService),
    });
    await refreshServices();
  };

  const addService = async (service) => {
    await fetch(`${API_BASE}/api/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service),
    });
    await refreshServices();
  };

const deleteService = async (id) => {
    await fetch(`${API_BASE}/api/services/${id}`, {
      method: 'DELETE',
    });
    await refreshServices();
  };

const handleUserLogin = (userData) => {
    sessionStorage.setItem('glitter_role', 'user');
    sessionStorage.setItem('glitter_user', JSON.stringify(userData || {}));
    setUser(userData || {});
    setRole('user');
  };

  const handleAdminLogin = () => {
    sessionStorage.setItem('glitter_role', 'admin');
    setRole('admin');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('glitter_role');
    sessionStorage.removeItem('glitter_user');
    sessionStorage.removeItem('glitter_admin_authed');
    setUser(null);
    setRole('');
  };

  // If no role is selected, show the login page
  if (!role) {
    return (
      <Router>
        <ScrollToTop />
        <LoginPage onUserLogin={handleUserLogin} onAdminLogin={handleAdminLogin} />
      </Router>
    );
  }

  const isAdmin = role === 'admin';

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
<Navbar role={role} user={user} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
          <Route path="/" element={<Home services={services} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/pricing" element={<Pricing services={services} />} />
          <Route path="/gallery" element={<Gallery services={services} />} />
          <Route path="/booking" element={<Booking services={services} addBooking={addBooking} />} />
          <Route path="/testimonials" element={<Testimonials />} />
<Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <AdminDashboard
                  bookings={bookings}
                  services={services}
                  updateBookingStatus={updateBookingStatus}
                  updateService={updateService}
                  addService={addService}
                  deleteService={deleteService}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

