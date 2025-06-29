import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button 
      className={`theme-switch ${isDark ? 'dark' : 'light'}`}
      onClick={() => setIsDark(!isDark)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="switch-track">
        <div className="switch-icons">
          <span className="icon sun">○</span>
          <span className="icon moon">☽</span>
        </div>
        <div className="switch-thumb"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;