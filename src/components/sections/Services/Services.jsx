import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Land Flipping (NG)",
      description: "Acquire fast-rising plots, resell within 12-18 months.",
      icon: "🏗️",
      color: "#0d6efd",
      location: "Nigeria"
    },
    {
      title: "Smart Rentals (U.S.)",
      description: "Short/mid-term fully furnished homes in U.S. cities.",
      icon: "🏠",
      color: "#0dcaf0",
      location: "United States"
    },
    {
      title: "Commercial Property Deals",
      description: "Invest in joint commercial real estate ventures.",
      icon: "🏢",
      color: "#198754",
      location: "Global"
    },
    {
      title: "Global Co-Investment",
      description: "Become a partner or fund a real estate cluster across continents.",
      icon: "🌐",
      color: "#6f42c1",
      location: "Global"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-content">
          <div className="services-header">
            <span className="services-tag">Our Services</span>
            <h2 className="services-heading">What We Do</h2>
            <div className="services-divider"></div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{"--service-color": service.color}}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <div className="service-location">{service.location}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 