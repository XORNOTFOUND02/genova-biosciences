import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Microscope,
  Database,
  Workflow,
  Shield,
  Zap,
  Cloud,
  Lock,
} from 'lucide-react';
import './Technology.css';

const platforms = [
  {
    icon: Workflow,
    title: 'Modern Exam Rooms',
    subtitle: 'Comfort-first spaces',
    description:
      'Three private, fully equipped exam rooms designed for conversation — quiet, bright, and accessible for patients of all abilities.',
    specs: ['Fully private', 'Wheelchair access', 'Quiet environment'],
  },
  {
    icon: Microscope,
    title: 'On-Site Laboratory',
    subtitle: 'Diagnostics under one roof',
    description:
      'Blood panels, rapid strep/flu tests and ECG performed in-clinic, so most answers come back during your visit instead of a second trip.',
    specs: ['Blood panels', 'ECG & vitals', 'Results in 24h'],
  },
  {
    icon: Cpu,
    title: 'Telemedicine Suite',
    subtitle: 'Care from anywhere',
    description:
      'A dedicated, encrypted room for video consultations — used for follow-ups, rural patients and anything that does not require hands-on exam.',
    specs: ['Encrypted video', 'EHR integrated', 'No app needed'],
  },
];

const capabilities = [
  {
    icon: Database,
    title: 'Digital Health Records',
    description:
      'Your chart is digital, secure and instantly available at every visit — you will never have to repeat your history twice.',
  },
  {
    icon: Lock,
    title: 'Privacy by Default',
    description:
      'Records are encrypted and never shared with third parties without your explicit, written consent.',
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description:
      'Most major insurance plans accepted, and self-pay rates are posted upfront — you will never receive a surprise bill.',
  },
  {
    icon: Cloud,
    title: 'Telehealth Follow-Ups',
    description:
      'Minor concerns are handled by video so you only come into the clinic when a physical exam truly matters.',
  },
  {
    icon: Zap,
    title: 'Short Wait Times',
    description:
      'Appointments run on schedule — average door-to-doctor time is under 10 minutes across the week.',
  },
  {
    icon: Cpu,
    title: 'Patient Portal',
    description:
      'Request prescription refills, message the clinic and view lab results through a simple online portal, usually within a day.',
  },
];

const timeline = [
  { year: '2007', milestone: 'Medical degree awarded with honors' },
  { year: '2011', milestone: 'Family medicine residency completed' },
  { year: '2014', milestone: 'Doctor Clinic opened its doors' },
  { year: '2019', milestone: 'On-site laboratory & diagnostics added' },
  { year: '2023', milestone: 'Telehealth suite launched for remote care' },
];

export default function Technology() {
  return (
    <div className="tech-page">
      {/* ---- Page Hero ---- */}
      <section className="tech-hero">
        <div className="tech-hero-content">
          <div className="tech-chip">
            <span className="tech-chip-dot" aria-hidden="true" />
            <span className="tech-chip-text">Clinic & Facilities</span>
          </div>
          <h1 className="tech-title">
            A clinic designed
            <br />
            <span className="highlight">for comfort.</span>
          </h1>
          <p className="tech-subtitle">
            Doctor Clinic pairs modern exam rooms and on-site diagnostics with
            the kind of personal attention large hospitals rarely have time for.
          </p>
        </div>
      </section>

      {/* ---- Core Spaces ---- */}
      <section className="tech-platforms">
        <div className="tech-section-header">
          <span className="tech-section-label">Core Spaces</span>
          <h2 className="tech-section-title">Three rooms. One standard.</h2>
        </div>
        <div className="tech-platforms-grid">
          {platforms.map((p) => (
            <article className="tech-platform-card" key={p.title}>
              <div className="tech-platform-icon">
                <p.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="tech-platform-subtitle">{p.subtitle}</span>
              <h3 className="tech-platform-title">{p.title}</h3>
              <p className="tech-platform-desc">{p.description}</p>
              <div className="tech-platform-specs">
                {p.specs.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---- How It Works ---- */}
      <section className="tech-capabilities">
        <div className="tech-section-header">
          <span className="tech-section-label">How It Works</span>
          <h2 className="tech-section-title">What visiting this practice feels like.</h2>
        </div>
        <div className="tech-capabilities-grid">
          {capabilities.map((c) => (
            <article className="tech-capability-card" key={c.title}>
              <div className="tech-capability-icon">
                <c.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="tech-capability-title">{c.title}</h3>
              <p className="tech-capability-desc">{c.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Practice Milestones ---- */}
      <section className="tech-timeline-section">
        <div className="tech-section-header">
          <span className="tech-section-label">Milestones</span>
          <h2 className="tech-section-title">How this practice grew.</h2>
        </div>
        <div className="tech-timeline">
          {timeline.map((item) => (
            <div className="tech-timeline-item" key={item.year}>
              <span className="tech-timeline-year">{item.year}</span>
              <span className="tech-timeline-milestone">{item.milestone}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="tech-cta">
        <div className="tech-cta-content">
          <h2 className="tech-cta-title">Come see the clinic.</h2>
          <p className="tech-cta-desc">
            Prospective patients are welcome to tour the space before a first
            appointment — or book directly and experience it yourself.
          </p>
          <div className="tech-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book a Visit
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/research" className="btn-secondary">
              My Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
