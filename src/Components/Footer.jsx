import React from 'react';
import { 
  FiCoffee, 
  FiInstagram, 
  FiFacebook, 
  FiTwitter, 
  FiMapPin, 
  FiPhone, 
  FiMail 
} from 'react-icons/fi';
import './Footer.css';

/**
 * Footer Component for a premium coffee shop website.
 * Features a dark coffee-inspired layout, logo, quick links,
 * social media icons, contact info, and copyright section.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        
        {/* Top Section: Grid Columns */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & Description */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <FiCoffee className="footer-logo-icon" aria-hidden="true" />
              <span>Velvet Brew</span>
            </a>
            <p className="footer-description">
              Dedicated to crafting extraordinary artisanal coffee experiences. 
              Sourced sustainably, roasted passionately, and served with warmth.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Visit Us</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMapPin className="footer-contact-icon" />
                <span>123 Artisan Lane, Coffee District, NY 10001</span>
              </li>
              <li>
                <FiPhone className="footer-contact-icon" />
                <span>+1 (555) 382-7828</span>
              </li>
              <li>
                <FiMail className="footer-contact-icon" />
                <span>hello@velvetbrew.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="footer-col hours-col">
            <h4 className="footer-heading">Hours</h4>
            <div className="footer-hours">
              <p><strong>Mon - Fri:</strong> 7:00 AM - 7:00 PM</p>
              <p><strong>Sat - Sun:</strong> 8:00 AM - 8:00 PM</p>
              <span className="footer-status">Open Now</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Velvet Brew Coffee Co. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;