import React from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Lekki Flip',
      type: 'Quick Flip',
      image: '/images/projects/lekki-flip.jpg',
      metrics: {
        acquired: 'Jan 2024',
        sold: 'Jun 2024',
        roi: '18%'
      },
      description: 'Strategic acquisition and renovation in Lagos\' prime Lekki district, demonstrating our expertise in high-value property flips.',
      location: 'Lekki, Lagos',
      duration: '6 months',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Philly Mid-Term Rental',
      type: 'Rental Conversion',
      image: '/images/projects/philly-rental.jpg',
      metrics: {
        units: '3-unit',
        status: 'Airbnb-ready',
        launch: 'Q2 2025'
      },
      description: 'Multi-unit property conversion optimized for short-term rentals, showcasing our ability to maximize rental income potential.',
      location: 'Philadelphia, PA',
      duration: '8 months',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Abuja Smart Plot',
      type: 'Land Development',
      image: '/images/projects/abuja-plot.jpg',
      metrics: {
        timeline: '7 months',
        roi: '21%',
        status: 'Completed'
      },
      description: 'Strategic land acquisition and development in Abuja\'s emerging market, highlighting our quick turnaround capabilities.',
      location: 'Abuja, Nigeria',
      duration: '7 months',
      status: 'Completed'
    }
  ];

  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Success Stories</span>
          <h2>Featured Projects</h2>
          <p className="subtitle">Real Returns, Real Fast</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-group">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-status" data-status={project.status.toLowerCase()}>
                    {project.status}
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <button className="view-details-btn">
                    View Details
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 