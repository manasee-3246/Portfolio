import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">&copy; 2026 Manasee Vaghasiya. Built with passion & React.</p>
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top of page" style={{ opacity: 1, pointerEvents: 'auto' }}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
