// In src/components/ImageSlider.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Array with image source, name, and position of team members
  const teamMembers = [
    { src: '/assets/images/Naami.png', name: 'Naami Ahmed', position: 'Team Lead' },
    { src: '/assets/images/Naami.png', name: 'John Doe', position: 'Developer' },
    { src: '/assets/images/Naami.png', name: 'Jane Smith', position: 'Designer' },
    { src: '/assets/images/Naami.png', name: 'Emily Brown', position: 'QA Engineer' },
    { src: '/assets/images/Naami.png', name: 'Michael Lee', position: 'DevOps Engineer' }
    // Add more team members as needed
  ];

  const totalMembers = teamMembers.length;

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < totalMembers - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalMembers - 1));
  };

  return (
    <div className="image-slider">
      <button className="arrow left-arrow" onClick={handlePrev}>&#10094;</button>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${index * 100}%)` }}>
          {teamMembers.map((member, i) => (
            <div key={i} className="slider-item">
              <img src={member.src} alt={`Image of ${member.name}`} />
              <div className="member-info">
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
