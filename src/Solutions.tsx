import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Users,
  Microscope,
  Zap,
  Monitor,
  TrendingUp,
  Award,
} from 'lucide-react';
import './Solutions.css';

const solutions = [
  {
    icon: Stethoscope,
    title: 'General Consultation',
    description:
      'Unhurried appointments where we discuss your history, symptoms and goals — and build a clear plan together.',
    features: ['Same-day sick visits', 'Annual physicals', 'Prescription reviews'],
  },
  {
    icon: HeartPulse,
    title: 'Chronic Condition Care',
    description:
      'Ongoing management for diabetes, hypertension and heart disease with regular check-ins and treatment adjustments.',
    features: ['Personal care plans', 'Home monitoring setup', 'Specialist coordination'],
  },
  {
    icon: Users,
    title: 'Family Medicine',
    description:
      'One trusted doctor for the whole family — children, adults and seniors, from newborn visits to geriatric care.',
    features: ['Kids & adults', 'Women’s health', 'Senior wellness'],
  },
  {
    icon: Microscope,
    title: 'Diagnostics & Lab Work',
    description:
      'On-site blood panels, ECG and rapid testing with most results explained back to you within 24 hours.',
    features: ['On-site lab', 'Rapid strep & flu', 'Results in 24 hrs'],
  },
  {
    icon: Zap,
    title: 'Same-Day Urgent Care',
    description:
      'Walk-in assessment for acute illness, minor injuries and infections — no waiting room marathon required.',
    features: ['Acute illness', 'Minor injuries', 'Wound care'],
  },
  {
    icon: Monitor,
    title: 'Telehealth Visits',
    description:
      'Secure video consultations for follow-ups, prescription renewals and quick concerns when you cannot come in.',
    features: ['Video consults', 'Rx renewals', 'Chart follow-ups'],
  },
];

const stats = [
  { icon: Users, value: '14,200+', label: 'Patients Treated' },
  { icon: TrendingUp, value: '97.4%', label: 'Satisfaction Rate' },
  { icon: Award, value: '18 yrs', label: 'In Clinical Practice' },
  { icon: Microscope, value: '24 hrs', label: 'Typical Lab Results' },
];

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* ---- Page Hero ---- */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <div className="solutions-chip">
            <span className="solutions-chip-dot" aria-hidden="true" />
            <span className="solutions-chip-text">Services</span>
          </div>
          <h1 className="solutions-title">
            Care built around
            <br />
            <span className="highlight">your everyday</span> health.
          </h1>
          <p className="solutions-subtitle">
            From same-day sick visits to long-term condition management, every
            service is designed around one thing: listening to you first.
          </p>
        </div>
      </section>

      {/* ---- Stats Bar ---- */}
      <section className="stats-bar">
        <div className="stats-container">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <stat.icon className="stat-icon" size={24} strokeWidth={1.5} />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Services Grid ---- */}
      <section className="solutions-grid-section">
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card-icon">
                <solution.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="solution-card-title">{solution.title}</h3>
              <p className="solution-card-desc">{solution.description}</p>
              <ul className="solution-card-features">
                {solution.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="solution-card-link">
                Book this service
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ---- CTA Section ---- */}
      <section className="solutions-cta">
        <div className="solutions-cta-content">
          <h2 className="solutions-cta-title">
            Ready to book your visit?
          </h2>
          <p className="solutions-cta-desc">
            Whether it is a routine check-up or a second opinion, my team and I
            are here to help — usually within 48 hours.
          </p>
          <div className="solutions-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book an Appointment
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Dr. Mehta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
