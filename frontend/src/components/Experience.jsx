import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title reveal">Professional Path</h2>
      <div className="experience-container">
        <div className="timeline">
          
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Present</span>
                  <h3 className="timeline-title">Software Developer</h3>
                  <span className="timeline-company">Barodaweb</span>
                </div>
                <span className="timeline-date">Present</span>
              </div>
              <div className="timeline-description">
                <p>Architecting and developing scalable web applications using React.js, JavaScript, Express, Node and modern frontend technologies. Building responsive user interfaces, RESTful APIs, and dynamic business solutions with a focus on performance, maintainability, and user experience.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Past Role</span>
                  <h3 className="timeline-title">Full Stack Engineer Intern</h3>
                  <span className="timeline-company">Turamac AI</span>
                </div>
                <span className="timeline-date">Jan 2026 - April 2026</span>
              </div>
              <div className="timeline-description">
                <p>Implemented customizable analytics dashboards utilizing Node.js backend nodes, Express API routers, and Postgres databases.</p>
                <ul>
                  <li>Constructed scalable real-time notification modules with WebSockets.</li>
                  <li>Integrated Stripe Checkout flows and recurring billing subscriptions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Academic</span>
                  <h3 className="timeline-title">B.E Computer Engineering</h3>
                  <span className="timeline-company">Ahmedabad Institute of Technology</span>
                </div>
                <span className="timeline-date">2022 - 2026</span>
              </div>
              <div className="timeline-description">
                <p>Pursued a Bachelor of Engineering in Computer Engineering. Specialized in Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, and Web Application Architectures.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
