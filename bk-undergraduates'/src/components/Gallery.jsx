// In src/components/Gallery.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Gallery.css'; // CSS file for styling the grid

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    '/assets/images/Meetup_01.jpg',
    '/assets/images/ICT_BootCamp_01.jpg',
    '/assets/images/ICT_BootCamp_02.jpg',
    '/assets/images/Prize_giving.png',
    '/assets/images/Prize_giving_02.jpg',
    '/assets/images/Holiday_classes.jpg',
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

  const visibleImages = showMore ? images : images.slice(0, 6);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {visibleImages.map((src, index) => (
          <div className={`grid-item item-${index + 1}`} key={index}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Gallery;