import React from 'react';
import './WorkWithUs.css';

const WorkWithUs = () => {
  return (
    <section className="work-with-us" id="work-with-us">
      <div className="container">
        <div className="work-with-us-content">
          <div className="title-wrapper">
            <span className="section-subtitle">Work With Us</span>
            <h2 className="section-title">
              <span className="gradient-text">Let's Build</span>
              <span className="highlight-text">Something Together</span>
            </h2>
          </div>
          
          <p className="section-description">
            We work with landowners, developers, and investors across the U.S. and Nigeria. 
            Whether you're funding your first project or seeking a co-investment partner—Aierth is ready.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-invest">
              <div className="btn-inner">
                <span className="btn-text">Invest with Aierth</span>
                <span className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
              <div className="btn-shine"></div>
            </button>

            <button className="btn btn-partner">
              <div className="btn-inner">
                <span className="btn-text">Partner Inquiry Form</span>
                <span className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </div>
              <div className="btn-shine"></div>
            </button>

            <button className="btn btn-schedule">
              <div className="btn-inner">
                <span className="btn-text">Schedule a Call</span>
                <span className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </div>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs; 