import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">

        {/* Left Column */}
        <div className="contact-left reveal-left">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot"></span>
            Available for Work
          </span>

          <h2 className="contact-heading">
            Let's Work<br />
            <span>Together.</span>
          </h2>

          <p className="contact-desc">
            I'm open to full-time roles, freelance projects, and exciting collaborations.
            If you have an idea or opportunity — let's talk.
          </p>

          <div className="contact-availability">
            <div className="contact-availability-inner">
              <i className="fa-regular fa-clock"></i>
              <span>Response within <strong>24 hours</strong></span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/manasee-vaghasiya-9a41182b2/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://github.com/manasee-3246" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right reveal-right">

          <div className="contact-info-card glass-panel">
            <a href="mailto:manaseevaghasiya1@gmail.com" className="contact-info-row">
              <div className="contact-info-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">manaseevaghasiya1@gmail.com</span>
              </div>
              <i className="fa-solid fa-arrow-up-right contact-info-arrow"></i>
            </a>

            <div className="contact-info-divider"></div>

            <a href="tel:+919106349475" className="contact-info-row">
              <div className="contact-info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+91 9106349475</span>
              </div>
              <i className="fa-solid fa-arrow-up-right contact-info-arrow"></i>
            </a>

            <div className="contact-info-divider"></div>

            <div className="contact-info-row no-link">
              <div className="contact-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Vadodara, Gujarat, India</span>
              </div>
              <i className="fa-solid fa-globe contact-info-arrow muted"></i>
            </div>
          </div>

          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <i className="fa-solid fa-paper-plane"></i>}
            </button>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
