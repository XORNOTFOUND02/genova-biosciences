import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Dna,
  ChevronDown,
  ArrowRight,
  Play,
  Menu,
  X,
  ArrowUp,
} from 'lucide-react';
import Solutions from './Solutions';
import About from './About';
import Technology from './Technology';
import Research from './Research';
import Careers from './Careers';
import Contact from './Contact';
import StoryModal from './StoryModal';
import './index.css';

/* ============================================
   Shared Navbar
   ============================================ */
function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <Link to="/" className="logo" aria-label="Doctor Clinic Home">
        <span className="logo-icon">
          <Dna size={24} strokeWidth={2} />
        </span>
        <span className="logo-text">
          <span className="logo-name">Doctor name</span>
          <span className="logo-subtitle">Doctor Clinic</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} id="nav-menu">
        <li>
          <Link to="/solutions" className="nav-link">
            Services
            {!isHome && <ChevronDown className="chevron-icon" size={16} strokeWidth={2} />}
          </Link>
        </li>
        <li>
          <Link to="/technology" className="nav-link">
            Clinic
          </Link>
        </li>
        <li>
          <Link to="/research" className="nav-link">
            Publications
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav-link">
            Stories
          </Link>
        </li>
        <li className="nav-mobile-only">
          <Link to="/contact" className="nav-link nav-link-contact">
            Book Visit
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
      </button>

      {/* CTA */}
      <Link to="/contact" className="nav-cta">
        Book Appointment
        <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
      </Link>
    </nav>
  );
}

/* ============================================
   Shared Footer
   ============================================ */
function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <div className="footer-newsletter">
      <h4>Stay informed</h4>
      {subscribed ? (
        <p className="footer-newsletter-success" role="status">
          You&apos;re subscribed! Watch your inbox for our newsletter.
        </p>
      ) : (
        <form className="footer-newsletter-form" onSubmit={subscribe} noValidate>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Your email address"
            aria-label="Email address for newsletter"
            aria-invalid={!!error}
          />
          <button type="submit">Subscribe</button>
          {error && (
            <span className="footer-newsletter-error" role="alert">
              {error}
            </span>
          )}
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label="Doctor Clinic Home">
            <span className="logo-icon">
              <Dna size={24} strokeWidth={2} />
            </span>
            <span className="logo-text">
              <span className="logo-name">Doctor</span>
              <span className="logo-subtitle">Clinic</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Personal care. Evidence-based medicine.
          </p>
          <FooterNewsletter />
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/solutions">General Consultation</Link>
            <Link to="/solutions">Chronic Care</Link>
            <Link to="/solutions">Family Medicine</Link>
            <Link to="/solutions">Telehealth</Link>
          </div>
          <div className="footer-col">
            <h4>Practice</h4>
            <Link to="/about">About Doctor's Name</Link>
            <Link to="/technology">Clinic & Facilities</Link>
            <Link to="/research">Publications</Link>
            <Link to="/careers">Patient Stories</Link>
          </div>
          <div className="footer-col">
            <h4>Patients</h4>
            <Link to="/contact">Book Appointment</Link>
            <Link to="/contact">Clinic Hours</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Doctor Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ============================================
   Home Page
   ============================================ */
function Home() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <>
      {/* ---------- Video Background ---------- */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/dna_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-overlay" aria-hidden="true" />

      {/* ---------- Hero Section ---------- */}
      <main className="hero">
        <div className="hero-content">
          {/* Chip / Badge */}
          <div className="hero-chip">
            <span className="hero-chip-dot" aria-hidden="true" />
            <span className="hero-chip-text">Family Medicine · Boston</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Care that listens.
            <br />
            <span className="highlight">Medicine</span> that works.
          </h1>

          {/* Description */}
          <p className="hero-description">
            Doctor's Name runs a solo family-medicine practice built on
            thirty-minute appointments, honest answers and prevention first.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              Book an Appointment
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStoryOpen(true)}
            >
              <span className="play-icon-wrapper" aria-hidden="true">
                <Play className="play-icon" size={12} strokeWidth={2.5} />
              </span>
              Meet Doctor's Name
            </button>
          </div>
        </div>
      </main>

      <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
    </>
  );
}

/* ============================================
   Scroll Utilities
   ============================================ */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={visible ? 'back-to-top back-to-top-visible' : 'back-to-top'}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}

/* ============================================
   App Root
   ============================================ */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/research" element={<Research />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
