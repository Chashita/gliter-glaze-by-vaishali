import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      text: 'Absolutely loved my bridal makeup! Vaishali made me look like a princess on my wedding day. The attention to detail was amazing and the makeup lasted all day long. Highly recommend!',
      weddingDate: 'December 2024'
    },
    {
      id: 2,
      name: 'Anjali Patel',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      text: 'Best decision I made for my engagement! The makeup was flawless and exactly what I wanted. Vaishali understood my vision perfectly and executed it beautifully.',
      weddingDate: 'November 2024'
    },
    {
      id: 3,
      name: 'Riya Khan',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      rating: 5,
      text: 'Thank you so much for making my reception look stunning! Got so many compliments from everyone. The hair styling was also perfect. Will definitely come back for all my events!',
      weddingDate: 'October 2024'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      text: 'I was nervous about my makeup trial but Vaishali made me feel so comfortable. The final look was beyond my expectations. Truly a professional artist!',
      weddingDate: 'September 2024'
    },
    {
      id: 5,
      name: 'Meera Desai',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      rating: 5,
      text: 'The pre-bridal package was fantastic! My skin was glowing on my wedding day. Vaishali and her team are truly the best in town. Thank you for everything!',
      weddingDate: 'August 2024'
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150',
      rating: 5,
      text: 'From the first consultation to the final look, everything was perfect. Vaishali really listens to what you want and delivers beyond expectations. My husband was amazed!',
      weddingDate: 'July 2024'
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h1>
      </div>

      <section className="section">
        <p className="section-subtitle">
          What our beautiful brides say about us
        </p>

        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
              <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                {testimonial.weddingDate}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section" style={{ background: 'rgba(255,228,233,0.3)' }}>
        <h2 className="section-title">Video Testimonials</h2>
        <p className="section-subtitle">Hear from our happy brides</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              height: '250px',
              background: 'linear-gradient(135deg, #FFB6C1 0%, #D4AF37 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '4rem',
              cursor: 'pointer'
            }}>
              ▶
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#B8860B' }}>Priya's Wedding Review</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Watch Priya share her experience</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              height: '250px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '4rem',
              cursor: 'pointer'
            }}>
              ▶
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#B8860B' }}>Anjali's Engagement Story</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Hear Anjali's transformation story</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              height: '250px',
              background: 'linear-gradient(135deg, #FFE4E9 0%, #FFB6C1 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '4rem',
              cursor: 'pointer'
            }}>
              ▶
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#B8860B' }}>Riya's Reception Look</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>See Riya's stunning reception look</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Share Your Experience</h2>
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Recently got your makeup done with us? We'd love to hear from you!
        </p>
        <button style={{
          padding: '1rem 3rem',
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Write a Review ✍️
        </button>
      </section>
    </div>
  );
}

export default Testimonials;
