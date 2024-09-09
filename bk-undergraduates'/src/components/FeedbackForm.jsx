// In src/components/FeedbackForm.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FeedbackForm.css'; // CSS file for styling the form

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Add your form submission logic (API call or database save) here
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert("Thank you for your feedback!");
  };

  return (
    <section id="feedback" className="feedback-section">
      <h2>Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
