import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Dna,
  ChevronDown,
  ArrowRight,
  Play,
} from 'lucide-react';
import Solutions from './Solutions';
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
          <span className="logo-name">Genova</span>
          <span className="logo-subtitle">Biosciences</span>
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
          <a href="#technology" className="nav-link">
            Technology
          </a>
        </li>
        <li>
          <a href="#research" className="nav-link">
            Research
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          <a href="#careers" className="nav-link">
            Careers
          </a>
        </li>
      </ul>

      {/* CTA */}
      <a href="#contact" className="nav-cta">
        Contact Us
        <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
      </a>
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
            <a href="#genomic">Genomic Sequencing</a>
            <a href="#drug">Drug Discovery</a>
            <a href="#gene">Gene Therapy</a>
            <a href="#diagnostics">Diagnostics</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#research">Research</a>
            <a href="#news">News</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#contact">Contact</a>
            <a href="#support">Support</a>
            <a href="#partner">Partnerships</a>
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

            <a href="#story" className="btn-secondary">
              <span className="play-icon-wrapper" aria-hidden="true">
                <Play className="play-icon" size={12} strokeWidth={2.5} />
              </span>
              Watch Our Story
            </a>
          </div>
        </div>
      </main>
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
