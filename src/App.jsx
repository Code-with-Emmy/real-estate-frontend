import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import AboutUs from './components/sections/About/AboutUs';
import Services from './components/sections/Services/Services';
import FeaturedProjects from './components/sections/FeaturedProjects/FeaturedProjects';
import WorkWithUs from './components/sections/WorkWithUs/WorkWithUs';
import Contact from './components/sections/Contact/Contact';
import './styles/dark-mode.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <FeaturedProjects />
          <WorkWithUs />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;