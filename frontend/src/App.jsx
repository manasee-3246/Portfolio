import { useEffect, useState } from 'react';
import './index.css';
import Cursor from './components/Cursor';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [typedText, setTypedText] = useState('');
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const textArray = ["Software Developer"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let timeout;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        setTypedText(prev => prev + textArray[textArrayIndex].charAt(charIndex));
        charIndex++;
        timeout = setTimeout(type, 100);
      } else {
        timeout = setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setTypedText(textArray[textArrayIndex].substring(0, charIndex - 1));
        charIndex--;
        timeout = setTimeout(erase, 60);
      } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        timeout = setTimeout(type, 600);
      }
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Theme logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Scroll reveal and header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-glow-wrapper">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      <Cursor />

      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a href="#home" className="logo">
            <i className="fa-solid fa-code"></i> Manasee<span>Vaghasiya</span>
          </a>
          
          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-item active">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#services" className="nav-item">Services</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-content reveal-left">
              <div className="badge-intro">
                <i className="fa-solid fa-hand-wave"></i> Hello, Welcome to my space
              </div>
              <h1 className="hero-title">
                I'm a <br />
                <span>{typedText}</span><span className="cursor-blink"></span>
              </h1>
              <p className="hero-description">
                Building high-performance, scalable web systems and applications. Specializing in robust backend architectures, clean API integrations, and efficient frontend experiences.
              </p>
              <div className="hero-ctas">
                <a href="#projects" className="btn btn-primary">
                  View My Work <i className="fa-solid fa-arrow-down"></i>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Let's Connect <i className="fa-solid fa-message"></i>
                </a>
              </div>
            </div>
            <div className="hero-visual reveal-right">
              <div className="avatar-wrapper">
                <img src="/assets/images/photo.jpeg" alt="Portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />

      </main>
      
      <Footer />
    </>
  );
}

export default App;
