import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Gallery({ services = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultGalleryImages = [
    { id: 1, src: 'https://i.pinimg.com/736x/9c/5f/2b/9c5f2b032c561377ba8d7524045e4c19.jpg', category: 'Bridal', title: 'Bridal Makeup' },
    { id: 2, src: 'https://bridal-makeup.in/images/spsimpleportfolio/bridal-makeup-all/low-res/engagement-bridal-makeup-kalyan.webp', category: 'Engagement', title: 'Engagement Look' },
    { id: 3, src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600', category: 'Party', title: 'Party Makeup' },
    { id: 4, src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=600', category: 'HD', title: 'HD Makeup' },
    { id: 5, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600', category: 'Hair', title: 'Hair Styling' },
    { id: 6, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600', category: 'Treatment', title: 'Skin Treatment' },
    { id: 7, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600', category: 'Nails', title: 'Nail Art' },
    { id: 8, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600', category: 'Bridal', title: 'Bridal Shoot' },
    { id: 9, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', category: 'Bridal', title: 'Wedding Day' },
  ];

  // Gallery reflects live services from backend (admin edits update it automatically)
  const servicesGallery = services.length > 0
    ? services
        .filter((s) => s.image)
        .map((s, i) => ({
          id: s._id || `svc-${i}`,
          src: s.image,
          category: s.name,
          title: s.name,
        }))
    : [];

  const galleryImages = servicesGallery.length > 0 ? servicesGallery : defaultGalleryImages;

  return (
    <div className="gallery-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h1>
      </div>

      <section className="section">
        <p className="section-subtitle">
          Browse through our beautiful transformations
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              style={{ cursor: 'pointer' }}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{image.title}</h3>
                <span style={{ color: '#D4AF37', fontSize: '0.9rem' }}>{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.9)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2000,
                padding: '2rem'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{ maxWidth: '90%', maxHeight: '90%' }}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '80vh', 
                    borderRadius: '10px',
                    border: '3px solid #D4AF37'
                  }}
                />
                <h2 style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>
                  {selectedImage.title}
                </h2>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Instagram Style Section */}
      <section className="section" style={{ background: 'rgba(255,228,233,0.3)' }}>
        <h2 className="section-title">Behind The Scenes</h2>
        <p className="section-subtitle">More moments from our studio</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {[
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300',
            'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300',
            'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300',
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              <img 
                src={src} 
                alt={` BTS ${index + 1}`}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="section">
        <h2 className="section-title">Transformation Videos</h2>
        <p className="section-subtitle">Watch our stunning makeovers</p>
        
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
              position: 'relative',
              width: '100%',
              paddingTop: '125%',
              background: '#000',
              overflow: 'hidden'
            }}>
              <iframe
                title="Bridal Video"
                src="https://www.instagram.com/reel/DNiZj6tR_u0/embed/"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media; clipboard-write; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '0'
                }}
              ></iframe>
            </div>
            <div style={{ padding: '1.5rem' }}>
<h3 style={{ color: '#B8860B' }}>🎬 Bridal Video</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Watch our bride's stunning transformation</p>
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
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              background: '#000'
            }}>
              <iframe
                title="Party Makeup Tutorial Video"
                src="https://www.youtube.com/embed/cXQ4hwRNdvU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            </div>
            <div style={{ padding: '1.5rem' }}>
<h3 style={{ color: '#B8860B' }}>💄 Engagement Video</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Watch our stunning engagement makeover</p>
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
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              background: '#000'
            }}>
              <iframe
                title="HD Makeup Video"
                src="https://www.youtube.com/embed/K4fcvEOLa1I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#B8860B' }}>✨ HD Makeup Video</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>See the magic of professional HD makeup</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
