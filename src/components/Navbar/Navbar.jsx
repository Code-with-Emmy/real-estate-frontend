import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            Aierth
          </a>
          
          <div className="navbar-links">
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#work-with-us" onClick={closeMobileMenu}>Work With Us</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            Aierth
          </a>
          <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#work-with-us" onClick={closeMobileMenu}>Work With Us</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar; 