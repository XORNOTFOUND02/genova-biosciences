import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Beaker,
  FlaskConical,
  Users,
  Microscope,
  HeartPulse,
  Dna,
} from 'lucide-react';
import './Research.css';

const focusAreas = [
  {
    icon: HeartPulse,
    title: 'Preventive Cardiology',
    description:
      'Catching heart risk early — blood pressure, cholesterol and lifestyle changes that keep patients out of the cardiac ward.',
    tags: ['Hypertension', 'Cholesterol', 'Lifestyle medicine'],
  },
  {
    icon: Microscope,
    title: 'Diabetes Management',
    description:
      'Practical Type 2 diabetes care with continuous glucose insights, nutrition plans and medication adjustments that fit real life.',
    tags: ['Type 2 Diabetes', 'CGM insights', 'Nutrition'],
  },
  {
    icon: Dna,
    title: 'Family Health Screening',
    description:
      'Risk-based screening for cancer and hereditary conditions — the right tests at the right age, explained in plain language.',
    tags: ['Cancer screening', 'Early detection', 'Risk assessment'],
  },
  {
    icon: Beaker,
    title: 'Healthy Aging',
    description:
      'Hormone balance, bone health and mobility programs that help patients stay independent well into their seventies and beyond.',
    tags: ['Hormone health', 'Bone density', 'Mobility'],
  },
];

const publications = [
  {
    journal: 'Journal of Family Practice',
    year: '2025',
    title: 'Door-to-doctor time under ten minutes: redesigning solo-practice scheduling',
    authors: "Doctor's Name, Rivera S.",
    doi: '10.1093/jfp/2025.0187',
  },
  {
    journal: 'American Journal of Preventive Medicine',
    year: '2024',
    title: 'Home blood-pressure logging improves hypertension control in primary care: a 12-month cohort',
    authors: "Doctor's Name, Okafor C., Chen L. et al.",
    doi: '10.1016/j.amepre.2024.06.014',
  },
  {
    journal: 'BMJ Primary Care',
    year: '2024',
    title: 'Telehealth follow-ups without visit fatigue: patient outcomes in a direct-care model',
    authors: "Doctor's Name, Rivera S.",
    doi: '10.1136/bmjpc-2024-00112',
  },
  {
    journal: 'Annals of Family Medicine',
    year: '2023',
    title: 'Teaching patients to read their own lab results: a plain-language intervention',
    authors: "Doctor's Name, Okafor C.",
    doi: '10.1136/afm.2023.0456',
  },
];

const trials = [
  {
    phase: 'Phase III',
    status: 'Active',
    title: 'CARDIO-PREVENT: Lifestyle intervention in pre-hypertension',
    enrollment: '3,100 patients',
    sites: '22 clinical sites',
  },
  {
    phase: 'Phase II',
    status: 'Active',
    title: 'DIET-RESET: Digital nutrition coaching in Type 2 diabetes',
    enrollment: '640 patients',
    sites: '8 clinics',
  },
  {
    phase: 'Phase I',
    status: 'Recruiting',
    title: 'VAX-65: Shingles vaccine response in adults over 65',
    enrollment: '120 volunteers',
    sites: '3 sites',
  },
  {
    phase: 'Phase II',
    status: 'Completed',
    title: 'STEP-UP: Walking programs after cardiac events',
    enrollment: '980 patients',
    sites: '11 clinical sites',
  },
];

const stats = [
  { icon: BookOpen, value: '24', label: 'Publications' },
  { icon: FlaskConical, value: '6', label: 'Clinical Trials' },
  { icon: Users, value: '9', label: 'Talks & Workshops' },
  { icon: Dna, value: '2', label: 'Textbook Chapters' },
];

export default function Research() {
  return (
    <div className="research-page">
      {/* ---- Page Hero ---- */}
      <section className="research-hero">
        <div className="research-hero-content">
          <div className="research-chip">
            <span className="research-chip-dot" aria-hidden="true" />
            <span className="research-chip-text">Publications & Talks</span>
          </div>
          <h1 className="research-title">
            Evidence-based care,
            <br />
            <span className="highlight">shared openly.</span>
          </h1>
          <p className="research-subtitle">
            Medicine moves fast — I stay current by publishing, teaching and
            contributing to clinical trials. This is the academic side of the
            practice, in the open for anyone to read.
          </p>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="research-stats">
        <div className="research-stats-container">
          {stats.map((s) => (
            <div className="research-stat-item" key={s.label}>
              <s.icon className="research-stat-icon" size={24} strokeWidth={1.5} />
              <span className="research-stat-value">{s.value}</span>
              <span className="research-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Focus Areas ---- */}
      <section className="research-focus">
        <div className="research-section-header">
          <span className="research-section-label">Clinical Interests</span>
          <h2 className="research-section-title">Where I focus my practice.</h2>
        </div>
        <div className="research-focus-grid">
          {focusAreas.map((area) => (
            <article className="research-focus-card" key={area.title}>
              <div className="research-focus-icon">
                <area.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="research-focus-title">{area.title}</h3>
              <p className="research-focus-desc">{area.description}</p>
              <div className="research-focus-tags">
                {area.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Clinical Trials ---- */}
      <section className="research-trials">
        <div className="research-section-header">
          <span className="research-section-label">Clinical Trials</span>
          <h2 className="research-section-title">Studies I have contributed to.</h2>
        </div>
        <div className="research-trials-list">
          {trials.map((trial) => (
            <div className="research-trial-card" key={trial.title}>
              <div className="research-trial-header">
                <span className={`research-trial-phase phase-${trial.phase.split(' ')[1].toLowerCase()}`}>
                  {trial.phase}
                </span>
                <span className={`research-trial-status status-${trial.status.toLowerCase()}`}>
                  {trial.status}
                </span>
              </div>
              <h3 className="research-trial-title">{trial.title}</h3>
              <div className="research-trial-meta">
                <span>{trial.enrollment}</span>
                <span>{trial.sites}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA (placed mid-page, before publications) ---- */}
      <section className="research-cta">
        <div className="research-cta-content">
          <h2 className="research-cta-title">
            Have a research or media question?
          </h2>
          <p className="research-cta-desc">
            Medical students, journalists and fellow clinicians are welcome to
            reach out — I answer thoughtful questions whenever the clinic day
            allows.
          </p>
          <div className="research-cta-actions">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/technology" className="btn-secondary">
              Visit the Clinic
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Publications ---- */}
      <section className="research-publications">
        <div className="research-section-header">
          <span className="research-section-label">Selected Publications</span>
          <h2 className="research-section-title">Papers I have authored.</h2>
        </div>
        <div className="research-pubs-list">
          {publications.map((pub) => (
            <article className="research-pub-card" key={pub.doi}>
              <div className="research-pub-meta">
                <span className="research-pub-journal">{pub.journal}</span>
                <span className="research-pub-year">{pub.year}</span>
              </div>
              <h3 className="research-pub-title">{pub.title}</h3>
              <p className="research-pub-authors">{pub.authors}</p>
              <span className="research-pub-doi">DOI: {pub.doi}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
