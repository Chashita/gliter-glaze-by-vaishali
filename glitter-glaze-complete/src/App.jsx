import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Footer from './components/Footer';
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);

  const API_BASE = 'http://localhost:5000';

  const refreshServices = async () => {
    const res = await fetch(`${API_BASE}/api/services`);
    const data = await res.json();
    setServices(data);
  };

  const refreshBookings = async () => {
    const res = await fetch(`${API_BASE}/api/bookings`);
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    refreshServices();
    refreshBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBooking = async (booking) => {
    await fetch(`${API_BASE}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    });
    await refreshBookings();
  };

  const updateBookingStatus = async (id, status) => {
    await fetch(`${API_BASE}/api/bookings/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    await refreshBookings();
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

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/pricing" element={<Pricing services={services} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking services={services} addBooking={addBooking} />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <AdminDashboard
                bookings={bookings}
                services={services}
                updateBookingStatus={updateBookingStatus}
                updateService={updateService}
                addService={addService}
                deleteService={deleteService}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

