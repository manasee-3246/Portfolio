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
                  <span className="timeline-badge">Past Role</span>
                  <h3 className="timeline-title">Jr. MERN Stack Developer</h3>
                  <span className="timeline-company">Barodaweb</span>
                </div>
                <span className="timeline-date">April 2026 - July 2026</span>
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
