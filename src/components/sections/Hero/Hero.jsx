import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Reimagining</span>
            <span className="highlight-text">Real Estate</span>
          </h1>
          <p className="hero-subtitle">
            <span className="animated-text">Across</span>
            <span className="bordered-text">Borders</span>
          </p>
          <p className="hero-description">
            Your trusted partner in global real estate investment, 
            delivering exceptional returns through strategic acquisitions 
            and innovative property solutions.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">
              Explore Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-secondary">
              Partner With Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;