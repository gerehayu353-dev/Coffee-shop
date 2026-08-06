import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCoffee } from 'react-icons/fi';
import './Navbar.css';

/**
 * Navbar Component for a premium coffee shop website.
 * Features a sticky header, transparent-to-white scroll transition,
 * smooth scrolling links, and a responsive mobile hamburger menu.
 */
const Navbar = () => {
  // State to track scroll position for background transition
  const [scrolled, setScrolled] = useState(false);
  // State to handle mobile menu toggle state
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a navigation link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Coffee Shop Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <FiCoffee className="logo-icon" aria-hidden="true" />
          <span>Velvet Brew</span>
        </a>

        {/* Navigation Links */}
        <nav 
          className={`navbar-menu ${isOpen ? 'active' : ''}`} 
          aria-label="Main Navigation"
        >
          <ul className="navbar-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#menu" onClick={closeMenu}>Menu</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;