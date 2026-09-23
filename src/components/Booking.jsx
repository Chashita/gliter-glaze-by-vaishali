import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Booking({ services = [], addBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [selectedTime, setSelectedTime] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const defaultServices = [
    { id: 1, name: 'Bridal Makeup', price: 15000 },
    { id: 2, name: 'Engagement Makeup', price: 8000, description: 'HD makeup with natural glowing look - includes hairstyle, colored lenses & eyelashes' },
    { id: 3, name: 'Party Makeup', price: 3000 },
    { id: 4, name: 'HD Makeup', price: 10000 },
    { id: 5, name: 'Hair Styling', price: 2500 },
    { id: 6, name: 'Pre-Bridal Package', price: 12000 },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;
  const selectedService = displayServices.find(s => s.name === formData.service);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !selectedTime) {
      alert('Please fill in all required fields');
      return;
    }

    const booking = {
      ...formData,
      time: selectedTime,
      price: selectedService?.price || 0,
      createdAt: new Date().toISOString()
    };

    if (addBooking) {
      addBooking(booking);
    }

    const newBookingId = 'GG' + Math.random().toString(36).substr(2, 8).toUpperCase();
    setBookingId(newBookingId);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    setSelectedTime(null);
  };

  return (
    <div className="booking-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book Appointment
        </motion.h1>
      </div>

      <section className="section">
        <div className="booking-container">
          {showSuccess ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3>🎉 Booking Confirmed!</h3>
              <p>Thank you for booking with Glitter Glaze by Vaishali!</p>
              <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                Your Booking ID: <strong>{bookingId}</strong>
              </p>
              <p style={{ marginTop: '0.5rem', color: '#666' }}>
                We will contact you shortly to confirm your appointment.
              </p>
              <button 
                onClick={() => setShowSuccess(false)}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.8rem 2rem',
                  background: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <h2 style={{ textAlign: 'center', color: '#B8860B', marginBottom: '1.5rem' }}>
                Schedule Your Beauty Experience
              </h2>

              {/* Booking Summary */}
              {selectedService && (
                <div className="booking-summary">
                  <h4 style={{ color: '#B8860B', marginBottom: '0.5rem' }}>Selected Service:</h4>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>{selectedService.name}</p>
                  <p style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: '700' }}>
                    ₹{selectedService.price.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Select Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a service</option>
                  {displayServices.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name} - ₹{service.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Select Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Time *</label>
                <div className="time-slots">
                  {timeSlots.map(time => (
                    <div
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements or questions..."
                  rows="3"
                />
              </div>

              <button type="submit" className="submit-button">
                Confirm Booking ✅
              </button>

              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
                You will receive a confirmation message on WhatsApp after booking.
              </p>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '3rem auto 0',
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(255,228,233,0.3)',
          borderRadius: '20px'
        }}>
          <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>Need Help?</h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            For any queries or custom packages, feel free to contact us directly.
          </p>
          <a 
href="https://wa.me/917206300089"
            className="whatsapp-button"
            style={{ display: 'inline-flex', textDecoration: 'none' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Booking;
