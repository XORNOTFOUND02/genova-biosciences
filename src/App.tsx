import {
  Dna,
  ChevronDown,
  ArrowRight,
  Play,
} from 'lucide-react';
import './index.css';

/* ============================================
   Genova Biosciences — Hero Section
   ============================================ */

function App() {
  return (
    <div className="app">
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

      {/* ---------- Navbar ---------- */}
      <nav className="navbar" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="logo" aria-label="Genova Biosciences Home">
          <span className="logo-icon">
            <Dna size={24} strokeWidth={2} />
          </span>
          <span className="logo-text">
            <span className="logo-name">Genova</span>
            <span className="logo-subtitle">Biosciences</span>
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <button className="nav-link" aria-haspopup="true">
              Solutions
              <ChevronDown className="chevron-icon" size={16} strokeWidth={2} />
            </button>
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
            <a href="#solutions" className="btn-primary">
              Explore Our Solutions
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </a>

            <a href="#story" className="btn-secondary">
              <span className="play-icon-wrapper" aria-hidden="true">
                <Play className="play-icon" size={12} strokeWidth={2.5} />
              </span>
              Watch Our Story
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
