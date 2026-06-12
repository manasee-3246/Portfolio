import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectData = {
    'vs-jewelcast': {
      title: "VS Jewelcast",
      tags: ["Luxury E-Commerce", "Custom Jewelry Design", "Real-Time Pricing"],
      icon: "fa-gem",
      color: "#ffd700",
      description: `
          <p><strong>VS Jewelcast</strong> is a luxury jewelry e-commerce platform that enables customers to customize and purchase premium jewelry pieces online. The platform offers personalized jewelry design, real-time pricing calculations, secure online transactions, and a seamless shopping experience for bespoke and ready-made jewelry collections.</p>
          <h4>Core Challenges Faced</h4>
          <ul>
              <li>Managing dynamic jewelry pricing based on precious metal and gemstone values.</li>
              <li>Handling high-quality product assets while maintaining website performance.</li>
              <li>Supporting complex customization workflows and order processing.</li>
          </ul>
          <h4>Key Features</h4>
          <ul>
              <li>Interactive jewelry customization with metal and gemstone selection.</li>
              <li>Real-time price calculation based on design preferences.</li>
              <li>Secure checkout and order management system.</li>
              <li>Responsive design optimized for desktop and mobile users.</li>
              <li>Custom jewelry design and quotation workflow.</li>
          </ul>
          <h4>Tools Used</h4>
          <p>Metal Pricing API, Stripe API, CSS Glassmorphism, React, Node.js.</p>
      `,
      category: 'webapp'
    },
    'food-delivery': {
      title: "Food Delivery System",
      tags: ["On-Demand Marketplace", "Geolocation Routing", "Express"],
      icon: "fa-utensils",
      color: "#ff6b6b",
      description: `
          <p>This <strong>Food Delivery System</strong> is a highly scalable, multi-vendor marketplace connecting local restaurants with active consumers. It features real-time order tracking, driver dispatching, and secure payment processing.</p>
          <h4>Core Challenges Faced</h4>
          <ul>
              <li>Constructing an efficient, low-latency driver dispatch algorithm.</li>
              <li>Handling high concurrent connections during peak lunch/dinner hours.</li>
              <li>Ensuring accurate geolocation mapping and delivery ETAs.</li>
          </ul>
          <h4>Key Features</h4>
          <ul>
              <li>Real-time driver location tracking using WebSockets.</li>
              <li>Multi-vendor storefronts with individual analytics dashboards.</li>
              <li>Automated order routing and dispatching.</li>
          </ul>
          <h4>Tools Used</h4>
          <p>JavaScript, Node.js, Express API, Socket.io, Mapbox GL JS, MongoDB.</p>
      `,
      category: 'webapp'
    },
    'job-portal': {
      title: "Job Portal Application",
      tags: ["Hiring Marketplace", "Resume Indexer", "React"],
      icon: "fa-briefcase",
      color: "#4cc9f0",
      description: `
          <p>The <strong>Job Portal Application</strong> is a premium employment marketplace connecting top-tier candidates with leading tech companies. It features an advanced resume parsing engine and algorithmic candidate matching.</p>
          <h4>Core Challenges Faced</h4>
          <ul>
              <li>Optimizing candidate indexing queries across thousands of resume text payloads.</li>
              <li>Building a secure, scalable role-based access control (RBAC) system for recruiters and applicants.</li>
          </ul>
          <h4>Key Features</h4>
          <ul>
              <li>Automated resume matching using indexing engines.</li>
              <li>Recruiter dashboard with application tracking systems (ATS).</li>
              <li>Transaction-based premium job posting packages.</li>
          </ul>
          <h4>Tools Used</h4>
          <p>React, Redux, Node.js, PostgreSQL, ElasticSearch, AWS S3.</p>
      `,
      category: 'webapp'
    },
    'farmers-trade': {
      title: "Farmer's Trade",
      tags: ["B2B E-Commerce", "Auction Marketplace", "Vanilla JS"],
      icon: "fa-leaf",
      color: "#aacc00",
      description: `
          <p><strong>Farmer's Trade</strong> is an organic D2C and wholesale B2B marketplace designed to bridge the gap between rural farmers and urban consumers/businesses. It cuts out the middleman to ensure fair pricing and fresh produce delivery.</p>
          <h4>Core Challenges Faced</h4>
          <ul>
              <li>Designing an intuitive interface accessible for rural users with low digital literacy.</li>
              <li>Implementing a robust real-time bidding system for wholesale agricultural auctions.</li>
          </ul>
          <h4>Key Features</h4>
          <ul>
              <li>Direct-to-consumer organic produce storefronts.</li>
              <li>Wholesale B2B auction marketplace with real-time bidding.</li>
              <li>Integrated logistics and harvest tracking.</li>
          </ul>
          <h4>Tools Used</h4>
          <p>Vanilla JS, HTML5, CSS3, Firebase Realtime Database, Stripe Connect.</p>
      `,
      category: 'webapp'
    },
    'student-directory': {
      title: "Student Directory",
      tags: ["Web Application", "Data Management", "Admin Dashboard"],
      icon: "fa-users",
      color: "#ff9f43",
      description: `
          <p><strong>Student Directory</strong> is a comprehensive web application designed to manage and organize student information efficiently. The platform enables administrators to add, update, search, and manage student records through a user-friendly interface. It simplifies student data management by providing quick access to academic and personal information in a centralized system.</p>
          <h4>Key Features</h4>
          <ul>
              <li>Student Registration and Management</li>
              <li>Advanced Search and Filtering</li>
              <li>Add, Edit, and Delete Student Records</li>
              <li>Responsive and User-Friendly Interface</li>
              <li>Secure Data Storage and Retrieval</li>
              <li>Organized Student Information Dashboard</li>
              <li>Real-Time Data Updates</li>
          </ul>
      `,
      category: 'webapp'
    }
  };

  const [activeProject, setActiveProject] = useState(null);

  const openModal = (id) => {
    setActiveProject(projectData[id]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="portfolio" id="projects">
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="portfolio-container">
          
          <div className="filter-bar reveal">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          </div>

          <div className="projects-grid">
            
            {/* VS Jewelcast */}
            <div className={`project-card glass-panel reveal ${filter !== 'all' && filter !== 'webapp' ? 'hide' : ''}`}>
              <div className="project-image-container">
                <div className="css-mockup css-mockup-jewelcast">
                  <div className="mockup-inner">
                    <i className="fa-solid fa-gem" style={{ color: '#ffd700', filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))' }}></i>
                    <h3>VS Jewelcast</h3>
                  </div>
                </div>
              </div>
              <div className="project-card-details">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">Luxury E-Commerce</span>
                    <span className="project-tag">3D Configurator</span>
                  </div>
                  <h3 className="timeline-title">VS Jewelcast</h3>
                  <p>A bespoke luxury e-commerce platform for custom jewelry design featuring dynamic metal pricing APIs and high-end payment gateways.</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-view-more" onClick={() => openModal('vs-jewelcast')}>
                    Details <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Food Delivery */}
            <div className={`project-card glass-panel reveal delay-100 ${filter !== 'all' && filter !== 'webapp' ? 'hide' : ''}`}>
              <div className="project-image-container">
                <div className="css-mockup css-mockup-food">
                  <div className="mockup-inner">
                    <i className="fa-solid fa-utensils" style={{ color: '#ff6b6b', filter: 'drop-shadow(0 0 15px rgba(255, 107, 107, 0.6))' }}></i>
                    <h3>Food Delivery System</h3>
                  </div>
                </div>
              </div>
              <div className="project-card-details">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">On-Demand Delivery</span>
                    <span className="project-tag">Real-Time Routing</span>
                  </div>
                  <h3 className="timeline-title">Food Delivery System</h3>
                  <p>An end-to-end food delivery marketplace featuring multi-vendor storefronts and real-time driver tracking.</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-view-more" onClick={() => openModal('food-delivery')}>
                    Details <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Job Portal */}
            <div className={`project-card glass-panel reveal delay-200 ${filter !== 'all' && filter !== 'webapp' ? 'hide' : ''}`}>
              <div className="project-image-container">
                <div className="css-mockup css-mockup-jobs">
                  <div className="mockup-inner">
                    <i className="fa-solid fa-briefcase" style={{ color: '#4cc9f0', filter: 'drop-shadow(0 0 15px rgba(76, 201, 240, 0.6))' }}></i>
                    <h3>Job Portal Application</h3>
                  </div>
                </div>
              </div>
              <div className="project-card-details">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">Job Board</span>
                    <span className="project-tag">Hiring Marketplace</span>
                  </div>
                  <h3 className="timeline-title">Job Portal Application</h3>
                  <p>A high-performance job marketplace offering transaction-based job packages, resume matching engines, recruiter dashboards.</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-view-more" onClick={() => openModal('job-portal')}>
                    Details <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Farmers Trade */}
            <div className={`project-card glass-panel reveal delay-300 ${filter !== 'all' && filter !== 'webapp' ? 'hide' : ''}`}>
              <div className="project-image-container">
                <div className="css-mockup css-mockup-farmers">
                  <div className="mockup-inner">
                    <i className="fa-solid fa-leaf" style={{ color: '#aacc00', filter: 'drop-shadow(0 0 15px rgba(170, 204, 0, 0.6))' }}></i>
                    <h3>Farmer's Trade</h3>
                  </div>
                </div>
              </div>
              <div className="project-card-details">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">B2B Agri-Trade</span>
                    <span className="project-tag">D2C Marketplace</span>
                  </div>
                  <h3 className="timeline-title">Farmer's Trade</h3>
                  <p>An organic agricultural e-commerce platform facilitating direct transactions between farmers and wholesale buyers.</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-view-more" onClick={() => openModal('farmers-trade')}>
                    Details <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Student Directory */}
            <div className={`project-card glass-panel reveal delay-400 ${filter !== 'all' && filter !== 'webapp' ? 'hide' : ''}`}>
              <div className="project-image-container">
                <div className="css-mockup css-mockup-student">
                  <div className="mockup-inner">
                    <i className="fa-solid fa-users" style={{ color: '#ff9f43', filter: 'drop-shadow(0 0 15px rgba(255, 159, 67, 0.6))' }}></i>
                    <h3>Student Directory</h3>
                  </div>
                </div>
              </div>
              <div className="project-card-details">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">Data Management</span>
                    <span className="project-tag">Dashboard</span>
                  </div>
                  <h3 className="timeline-title">Student Directory</h3>
                  <p>A comprehensive web application designed to manage and organize student information efficiently.</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-view-more" onClick={() => openModal('student-directory')}>
                    Details <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-overlay ${activeProject ? 'open' : ''}`} onClick={(e) => { if(e.target.className.includes('modal-overlay')) closeModal(); }}>
        <div className="modal-container glass-panel">
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close Project Details Dialog">
            <i className="fa-solid fa-xmark"></i>
          </button>
          {activeProject && (
            <>
              <div className="modal-hero" style={{ background: `linear-gradient(135deg, ${activeProject.color}33 0%, transparent 100%)` }}>
                <div className="modal-hero-icon-wrapper" style={{ boxShadow: `0 0 40px ${activeProject.color}88`, borderColor: activeProject.color }}>
                  <i className={`fa-solid ${activeProject.icon}`} style={{ color: activeProject.color }}></i>
                </div>
              </div>
              <div className="modal-content-wrapper">
                <div className="modal-tags">
                  {activeProject.tags.map((tag, idx) => <span key={idx} className="modal-tag">{tag}</span>)}
                </div>
                <h3 className="modal-title">{activeProject.title}</h3>
                <div className="modal-body" dangerouslySetInnerHTML={{ __html: activeProject.description }}></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
