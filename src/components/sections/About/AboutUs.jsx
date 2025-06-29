import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering new solutions in real estate technology",
      icon: "🚀",
      color: "#0d6efd"
    },
    {
      title: "Transparency",
      description: "Clear and honest dealings in all our operations",
      icon: "🔍",
      color: "#0dcaf0"
    },
    {
      title: "Speed",
      description: "Efficient and rapid service delivery",
      icon: "⚡",
      color: "#198754"
    },
    {
      title: "Accessibility",
      description: "Making real estate opportunities available to all",
      icon: "🌍",
      color: "#6f42c1"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <span className="section-tag">About Us</span>
            <h2 className="about-heading">Who We Are</h2>
            <div className="about-divider"></div>
          </div>
          
          <div className="about-body">
            <div className="about-text-content">
              <p className="about-text">
                <span className="brand-name">Aierth Inc</span> is a real estate-tech company transforming how investors, homeowners, and developers engage with land and rental opportunities in the U.S. and Nigeria.
              </p>
              <p className="about-text">
                Founded in <strong>2022</strong>, our mission is to make real estate <em>faster</em>, <em>leaner</em>, and <em>globally accessible</em>. Whether you're flipping your first plot or scaling rentals, Aierth gives you the edge.
              </p>
            </div>
          </div>

          <div className="values-section">
            <div className="values-header">
              <span className="values-tag">Our Values</span>
              <h3 className="values-heading">Core Values</h3>
              <p className="values-subheading">The principles that guide our mission and drive our success</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card" style={{"--value-color": value.color}}>
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                  <div className="value-decoration"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
