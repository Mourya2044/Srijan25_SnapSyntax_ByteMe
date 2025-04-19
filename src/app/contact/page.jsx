import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <div className="contact-box">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;