import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './Hero.css';

/**
 * Hero Component for a premium coffee shop landing page.
 * Features a full-screen background with a dark overlay, animated headline text,
 * call-to-action buttons, and a bouncing scroll-down indicator.
 */
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background Image Container with Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content Wrapper */}
      <div className="hero-content">
        <span className="hero-subtitle">Welcome to Velvet Brew</span>
        
        <h1 className="hero-title">
          Fresh Coffee Made With Passion
        </h1>
        
        <p className="hero-description">
          Experience handcrafted artisanal roasts sourced from the world's finest coffee beans, 
          brewed to absolute perfection just for you.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">
            Explore Menu
          </a>
          <a href="#contact" className="btn btn-secondary">
            Visit Us
          </a>
        </div>
      </div>

      {/* Bouncing Scroll-Down Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down to about section">
        <FiChevronDown />
      </a>
    </section>
  );
};

export default Hero;