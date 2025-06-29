import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-background">
        <div className="contact-overlay"></div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <span className="section-subtitle">Get in Touch</span>
            <h2 className="section-title">
              <span className="gradient-text">Let's Start</span>
              <span className="highlight-text">a Conversation</span>
            </h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <a href="mailto:info@aierth.com" className="info-link">
                    info@aierth.com
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Our Offices</h3>
                  <div className="office-locations">
                    <div className="location">
                      <span className="location-icon">📍</span>
                      <p className="info-text">PA, USA</p>
                    </div>
                    <div className="location">
                      <span className="location-icon">📍</span>
                      <p className="info-text">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <a href="tel:+1XXXXXXXXXX" className="info-link">
                    +1 (XXX) XXX-XXXX
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                    />
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Reason for Contact</label>
                  <div className="input-wrapper">
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a reason</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows="5"
                    ></textarea>
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                  <span className="btn-shine"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 