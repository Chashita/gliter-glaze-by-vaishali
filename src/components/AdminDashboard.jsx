import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function AdminDashboard({ bookings = [], services = [], updateBookingStatus, updateService, addService, deleteService }) {
  const [activeTab, setActiveTab] = useState('bookings');
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const defaultServices = [
    { id: 1, name: 'Bridal Makeup', price: 15000, description: 'Complete bridal makeup with trial session', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400' },
    { id: 2, name: 'Engagement Makeup', price: 8000, description: 'Glamorous engagement makeup look', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400' },
    { id: 3, name: 'Party Makeup', price: 3000, description: 'Perfect party look for any occasion', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400' },
    { id: 4, name: 'HD Makeup', price: 10000, description: 'High-definition makeup for photos & videos', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=400' },
    { id: 5, name: 'Hair Styling', price: 2500, description: 'Professional hair styling for all occasions', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
{ id: 6, name: 'Pre-Bridal Package', price: 12000, description: 'Complete pre-bridal skincare package', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400' },
    { id: 7, name: 'Airbrush Makeup', price: 4500, description: 'Flawless airbrush makeup for a smooth, camera-ready finish', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400' },
  ];

const displayServices = services.length > 0 ? services : defaultServices;
  // Use bookings directly from props (backend data from App.jsx)
  const [localBookings, setLocalBookings] = useState(bookings);
  
  // Sync local state when prop changes (e.g. after backend refresh)
  React.useEffect(() => {
    setLocalBookings(bookings);
  }, [bookings]);

  const displayBookings = localBookings;

  const handleStatusUpdate = (bookingId, newStatus) => {
    // If local fallback mode (backed was down and saved locally), update locally
    if (typeof bookingId === 'string' && bookingId.startsWith('local_')) {
      setLocalBookings(prev => prev.map(b => 
        b._id === bookingId ? { ...b, status: newStatus } : b
      ));
    } else {
      // Real backend call
      updateBookingStatus && updateBookingStatus(bookingId, newStatus);
    }
  };

const handleServiceSubmit = (e) => {
    e.preventDefault();
if (editingService) {
      updateService(editingService._id || editingService.id, {
        ...serviceForm,
        price: parseInt(serviceForm.price)
      });
      setEditingService(null);
    } else {
      addService({
        ...serviceForm,
        price: parseInt(serviceForm.price)
      });
    }
    setShowServiceForm(false);
    setServiceForm({ name: '', price: '', description: '', image: '' });
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setServiceForm({
      name: service.name,
      price: service.price.toString(),
      description: service.description,
      image: service.image
    });
    setShowServiceForm(true);
  };

return (
    <div className="admin-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admin Dashboard
        </motion.h1>
      </div>

      <section className="admin-container">
        {/* Admin Tabs */}
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            📅 Bookings ({displayBookings.length})
          </button>
          <button 
            className={`admin-tab ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            💄 Services ({displayServices.length})
          </button>
          <button 
            className={`admin-tab ${activeTab === 'statistics' ? 'active' : ''}`}
            onClick={() => setActiveTab('statistics')}
          >
            📊 Statistics
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#666', fontSize: '0.9rem' }}>Total Bookings</h3>
                <p style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: '700' }}>{displayBookings.length}</p>
              </div>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#666', fontSize: '0.9rem' }}>Pending</h3>
                <p style={{ fontSize: '2rem', color: '#FFC107', fontWeight: '700' }}>
                  {displayBookings.filter(b => b.status === 'pending').length}
                </p>
              </div>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#666', fontSize: '0.9rem' }}>Approved</h3>
                <p style={{ fontSize: '2rem', color: '#28A745', fontWeight: '700' }}>
                  {displayBookings.filter(b => b.status === 'approved').length}
                </p>
              </div>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#666', fontSize: '0.9rem' }}>Total Revenue (Approved)</h3>
                <p style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: '700' }}>
                  ₹{displayBookings.filter(b => b.status === 'approved').reduce((sum, b) => sum + (b.price || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>

            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date & Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
<tbody>
{displayBookings.map((booking, index) => (
                  <tr key={booking._id || index}>
                    <td>id{index + 1}</td>
                    <td>
                      <div>
                        <strong>{booking.name}</strong>
                        <br />
                        <small style={{ color: '#666' }}>{booking.phone}</small>
                      </div>
                    </td>
                    <td>{booking.service}</td>
                    <td>
                      {booking.date}
                      <br />
                      <small style={{ color: '#666' }}>{booking.time}</small>
                    </td>
                    <td style={{ fontWeight: '600', color: '#D4AF37' }}>
                      ₹{booking.price?.toLocaleString() || 'N/A'}
                    </td>
                    <td>
                      <span className={`status-badge status-${booking.status}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      {booking.status === 'pending' && (
                        <>
                          <button 
                            className="action-button approve-btn"
                            onClick={() => handleStatusUpdate(booking._id, 'approved')}
                          >
                            ✓
                          </button>
                          <button 
                            className="action-button reject-btn"
                            onClick={() => handleStatusUpdate(booking._id, 'rejected')}
                          >
                            ✗
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ color: '#B8860B' }}>Manage Services</h2>
              <button 
                onClick={() => {
                  setShowServiceForm(true);
                  setEditingService(null);
                  setServiceForm({ name: '', price: '', description: '', image: '' });
                }}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                + Add Service
              </button>
            </div>

            {/* Service Form Modal */}
            {showServiceForm && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
                <div className="service-form" style={{ maxWidth: '500px', width: '90%' }}>
                  <h3 style={{ color: '#B8860B', marginBottom: '1.5rem' }}>
                    {editingService ? 'Edit Service' : 'Add New Service'}
                  </h3>
                  <form onSubmit={handleServiceSubmit}>
                    <div className="form-group">
                      <label>Service Name</label>
                      <input
                        type="text"
                        value={serviceForm.name}
                        onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                        placeholder="Enter service name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price (₹)</label>
                      <input
                        type="number"
                        value={serviceForm.price}
                        onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
                        placeholder="Enter price"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        value={serviceForm.description}
                        onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                        placeholder="Enter description"
                        rows="3"
                      />
                    </div>
                    <div className="form-group">
                      <label>Image URL</label>
                      <input
                        type="text"
                        value={serviceForm.image}
                        onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                        placeholder="Enter image URL"
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <button type="submit" className="submit-button" style={{ flex: 1 }}>
                        {editingService ? 'Update' : 'Add'} Service
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          setShowServiceForm(false);
                          setEditingService(null);
                        }}
                        style={{
                          padding: '1rem',
                          background: '#666',
                          color: 'white',
                          border: 'none',
                          borderRadius: '10px',
                          cursor: 'pointer'
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="services-grid">
{displayServices.map(service => (
                <div key={service._id || service.id} className="service-card">
                  <img src={service.image || 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400'} alt={service.name} />
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <span className="service-price">₹{service.price.toLocaleString()}</span>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                      <button 
                        onClick={() => handleEditService(service)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          background: '#D4AF37',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        Edit
                      </button>
                      <button 
onClick={() => deleteService && deleteService(service._id || service.id)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          background: '#DC3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'statistics' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 style={{ color: '#B8860B', marginBottom: '2rem' }}>Overview Statistics</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem'
            }}>
              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👰</div>
                <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700' }}>500+</h3>
                <p style={{ color: '#666' }}>Total Brides Served</p>
              </div>

              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
                <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700' }}>4.9</h3>
                <p style={{ color: '#666' }}>Average Rating</p>
              </div>

              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700' }}>50+</h3>
                <p style={{ color: '#666' }}>Awards Won</p>
              </div>

              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', fontWeight: '700' }}>8+</h3>
                <p style={{ color: '#666' }}>Years Experience</p>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;
