import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Dna,
  ChevronDown,
  ArrowRight,
  Play,
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

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <Link to="/" className="logo" aria-label="Genova Biosciences Home">
        <span className="logo-icon">
          <Dna size={24} strokeWidth={2} />
        </span>
        <span className="logo-text">
          <span className="logo-name">Doctor name</span>
          <span className="logo-subtitle">Doctor Clinic</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/solutions" className="nav-link">
            Solutions
            {!isHome && <ChevronDown className="chevron-icon" size={16} strokeWidth={2} />}
          </Link>
        </li>
        <li>
          <Link to="/technology" className="nav-link">
            Technology
          </Link>
        </li>
        <li>
          <Link to="/research" className="nav-link">
            Research
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav-link">
            Careers
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Link to="/contact" className="nav-cta">
        Contact Us
        <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
      </Link>
    </nav>
  );
}

/* ============================================
   Shared Footer
   ============================================ */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label="Genova Biosciences Home">
            <span className="logo-icon">
              <Dna size={24} strokeWidth={2} />
            </span>
            <span className="logo-text">
              <span className="logo-name">Genova</span>
              <span className="logo-subtitle">Biosciences</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Advancing science. Transforming lives.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/solutions">Genomic Sequencing</Link>
            <Link to="/solutions">Drug Discovery</Link>
            <Link to="/solutions">Gene Therapy</Link>
            <Link to="/solutions">Diagnostics</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/research">Research</Link>
            <Link to="/research">News</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
            <Link to="/contact">Partnerships</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Genova Biosciences. All rights reserved.</p>
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
            <span className="hero-chip-text">Innovating Life Sciences</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Advancing science.
            <br />
            <span className="highlight">Transforming</span> lives.
          </h1>

          {/* Description */}
          <p className="hero-description">
            Genova Biosciences is at the forefront of biotechnology, developing
            innovative solutions for a healthier tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/solutions" className="btn-primary">
              Explore Our Solutions
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
              Watch Our Story
            </button>
          </div>
        </div>
      </main>

      <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
    </>
  );
}

/* ============================================
   App Root
   ============================================ */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
