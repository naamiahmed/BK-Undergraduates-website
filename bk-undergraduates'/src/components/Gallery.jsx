// In src/components/Gallery.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Gallery.css'; // CSS file for styling the grid

const Gallery = () => {
  const images = [
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png',
    '/assets/images/Naami.png'
    // Add more images as needed
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className={`grid-item item-${index + 1}`} key={index}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
