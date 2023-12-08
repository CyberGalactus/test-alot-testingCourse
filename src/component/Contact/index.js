import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Skapa en mailto-länk
    const mailtoLink = `mailto:${formData.email}?subject=Kontaktformulär&body=${formData.message}`;

    // Omdirigera till e-postklienten
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <h1>Kontakta oss</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Contact;
