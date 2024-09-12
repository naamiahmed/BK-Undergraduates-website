// In src/components/RegistrationPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    birthDate: '',
    olBatch: '',
    alBatch: '',
    university: '',
    courseName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle the form submission logic (e.g., send data to a backend or Firebase)
    alert('You will receive your Member ID via email and WhatsApp if provided.');
  };

  return (
    <div className="registration-page">
      <h2>New Member Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name with Initials:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>WhatsApp Number (Optional):</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>O/L Batch:</label>
          <input
            type="text"
            name="olBatch"
            value={formData.olBatch}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>A/L Batch (1st Attempt):</label>
          <input
            type="text"
            name="alBatch"
            value={formData.alBatch}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>University Name:</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>University Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
