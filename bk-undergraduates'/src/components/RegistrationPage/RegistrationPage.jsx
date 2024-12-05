// In src/components/RegistrationPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    nameWithInitials: '',
    email: '',
    whatsappNumber: '',
    birthDate: '',
    olBatch: '',
    alBatch: '',
    universityName: '',
    universityCourse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nameWithInitials" placeholder="Name with Initials" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="whatsappNumber" placeholder="WhatsApp Number (Optional)" onChange={handleChange} />
      <input type="date" name="birthDate" onChange={handleChange} required />
      <input type="text" name="olBatch" placeholder="O/L Batch" onChange={handleChange} required />
      <input type="text" name="alBatch" placeholder="A/L Batch (1st Attempt)" onChange={handleChange} required />
      <input type="text" name="universityName" placeholder="University Name" onChange={handleChange} required />
      <input type="text" name="universityCourse" placeholder="University Course" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationPage;
