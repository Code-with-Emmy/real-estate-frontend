import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo-mark">
        <div className="logo-cube">
          <span>A</span>
        </div>
      </div>
      <div className="logo-text">
        <span className="logo-name">Aierth</span>
        <span className="logo-plus">Inc</span>
        <span className="logo-labs"></span>
      </div>
    </div>
  );
};

export default Logo;