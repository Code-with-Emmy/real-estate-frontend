import React, { useState, useEffect } from 'react';
import Logo from '../../common/Logo/Logo';
import ThemeToggle from '../../common/ThemeToggle/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="nav-brand">
            <Logo />
          </a>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>

          <div className="nav-controls">
            <ThemeToggle />
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;