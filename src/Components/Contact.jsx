import React, { useState } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend, 
  FiCheckCircle 
} from 'react-icons/fi';
import './Contact.css';

/**
 * Contact Component for a premium coffee shop website.
 * Features store details with React Icons on the left, an interactive 
 * contact form on the right with validation feedback, and a Google Maps placeholder section below.
 */
const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to handle submission success notification
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success banner after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">We’d Love to Hear From You</h2>
        </div>

        {/* Top Split Layout: Contact Info & Form */}
        <div className="contact-grid">
          
          {/* Left Side: Store Information */}
          <div className="contact-info-card">
            <h3 className="card-title">Visit Velvet Brew</h3>
            <p className="card-subtitle">
              Drop by for a fresh cup of coffee or reach out to us with any questions or feedback.
            </p>

            <ul className="info-list">
              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FiMapPin className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">123 Artisan Lane, Coffee District,NY 10001</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FiPhone className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+1 (555) 382-7828</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FiMail className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Email</span>
                  <span className="info-value">hello@velvetbrew.com</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FiClock className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Opening Hours</span>
                  <span className="info-value">Mon - Fri: 7:00 AM - 7:00 PM</span>
                  <span className="info-value">Sat - Sun: 8:00 AM - 8:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-card">
            <h3 className="card-title">Send Us a Message</h3>
            <p className="card-subtitle">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {submitted && (
              <div className="success-banner" role="alert">
                <FiCheckCircle className="success-icon" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?" 
                  required 
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FiSend className="btn-icon" />
              </button>
            </form>
          </div>

        </div>

        {/* Below the Form: Google Maps Placeholder Section */}
        <div className="map-placeholder-section">
          <div className="map-card">
            <div className="map-overlay-content">
              <FiMapPin className="map-pin-icon" />
              <h4>Find Us on the Map</h4>
              <p>123 Artisan Lane, Coffee District, NY 10001</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-link-btn"
              >
                Open in Google Maps
              </a>
            </div>
            {/* Interactive/Stylized structural background frame to simulate a map view */}
            <div className="map-bg-frame"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;