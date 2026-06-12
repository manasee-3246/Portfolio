import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title reveal">About Me</h2>
      <div className="about-container">
        <div className="about-grid">
          
          <div className="about-bio glass-panel reveal-left">
            <h3 className="timeline-title">Who am I?</h3>
            <br />
            <p>
              I'm a passionate software developer and designer based in Baroda. With 6 months of professional experience, I engineer pixel-perfect interactive web apps that aren't just fast, but delightful to use.
            </p>
            <p>
              My approach focuses on creating robust systems using clean code while prioritizing responsive layouts and aesthetic micro-interactions.
            </p>
            

          </div>

          <div className="about-skills glass-panel reveal-right">
            <h3 className="skills-header">Technical Toolkit</h3>
            
            <div className="skills-wrapper">
              <div className="skill-category">
                <h4>Frontend Architecture</h4>
                <div className="skill-pills">
                  <span className="skill-pill"><i className="fa-brands fa-html5" style={{ color: '#e34c26' }}></i> HTML5</span>
                  <span className="skill-pill"><i className="fa-brands fa-css3-alt" style={{ color: '#264de4' }}></i> CSS3 / SCSS</span>
                  <span className="skill-pill"><i className="fa-brands fa-js" style={{ color: '#f7df1e' }}></i> JavaScript</span>
                  <span className="skill-pill"><i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i> React.js</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend & Data</h4>
                <div className="skill-pills">
                  <span className="skill-pill"><i className="fa-brands fa-node-js" style={{ color: '#68a063' }}></i> Node.js</span>
                  <span className="skill-pill"><i className="fa-solid fa-server"></i> Express API</span>
                  <span className="skill-pill"><i className="fa-solid fa-database" style={{ color: '#4db33d' }}></i> MongoDB</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Creative Design & DevOps</h4>
                <div className="skill-pills">
                  <span className="skill-pill"><i className="fa-brands fa-git-alt" style={{ color: '#f1502f' }}></i> Git & GitHub</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
