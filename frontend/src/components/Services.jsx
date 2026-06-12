import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title reveal">What I Do</h2>
      <div className="services-container">
        <div className="services-grid">
          
          <div className="service-card glass-panel reveal delay-100" id="service-ai">
            <div className="service-icon-box">
              <i className="fa-solid fa-robot"></i>
            </div>
            <h3>AI-Assisted Dev</h3>
            <p>Leveraging advanced AI models to accelerate development, optimize code logic, and integrate intelligent features into modern applications.</p>
          </div>

          <div className="service-card glass-panel reveal delay-200" id="service-software">
            <div className="service-icon-box">
              <i className="fa-solid fa-code-branch"></i>
            </div>
            <h3>Software Development</h3>
            <p>Building scalable backend architectures, integrating third-party APIs, and engineering custom software solutions to meet complex business needs.</p>
          </div>

          <div className="service-card glass-panel reveal delay-300" id="service-web">
            <div className="service-icon-box">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>Designing modern, responsive, and robust web applications with full responsiveness and clean codebase structures.</p>
          </div>

          <div className="service-card glass-panel reveal delay-400" id="service-seo">
            <div className="service-icon-box">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
            </div>
            <h3>SEO Optimization</h3>
            <p>Configuring metadata schemes, optimizing page indexation layout, structure markup, and visual assets load speeds.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
