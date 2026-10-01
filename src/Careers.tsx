import { Link } from 'react-router-dom';
import {
  ArrowRight,
  User,
  Star,
  Clock,
  Heart,
  GraduationCap,
  Stethoscope,
  PiggyBank,
  Dumbbell,
} from 'lucide-react';
import './Careers.css';

const openRoles = [
  {
    title: 'She caught what three other doctors missed.',
    department: 'Maria G. · Patient since 2018',
    location: 'Cardiac screening',
    type: '★★★★★',
    tags: ['Hypertension', 'Preventive care', 'Referral follow-up'],
  },
  {
    title: 'First doctor who explained my labs in plain English.',
    department: 'James T. · Patient since 2021',
    location: 'Diabetes care',
    type: '★★★★★',
    tags: ['Type 2 Diabetes', 'Nutrition', 'Telehealth'],
  },
  {
    title: 'My whole family sees him — kids included.',
    department: 'The Rivera Family · Patients since 2016',
    location: 'Family medicine',
    type: '★★★★★',
    tags: ['Pediatrics', 'Vaccines', 'Same-day visits'],
  },
  {
    title: 'Booked at 8am, seen at 8:10. Unreal.',
    department: 'Dana K. · Patient since 2023',
    location: 'Urgent care',
    type: '★★★★★',
    tags: ['Same-day', 'Short waits', 'Transparent pricing'],
  },
  {
    title: 'He called me himself with the biopsy results.',
    department: 'Robert A. · Patient since 2015',
    location: 'Cancer screening',
    type: '★★★★★',
    tags: ['Early detection', 'Direct communication', 'Trust'],
  },
  {
    title: 'After 6 months my blood pressure finally settled.',
    department: 'Priya S. · Patient since 2022',
    location: 'Chronic care',
    type: '★★★★★',
    tags: ['Lifestyle plan', 'Home monitoring', 'Follow-ups'],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Care That Actually Listens',
    description:
      'Every appointment starts with your full story — a minimum of 30 minutes, never a seven-minute conveyor belt.',
  },
  {
    icon: GraduationCap,
    title: 'Plain-Language Explanations',
    description:
      'You leave knowing exactly what the diagnosis means, why this plan was chosen, and what happens if we wait.',
  },
  {
    icon: Clock,
    title: 'Answers Within One Day',
    description:
      'Lab results, portal messages and prescription refills are handled within one business day — usually the same afternoon.',
  },
  {
    icon: PiggyBank,
    title: 'Transparent Costs',
    description:
      'Self-pay rates are posted upfront and insurance is billed for you — you will never open a surprise bill here.',
  },
  {
    icon: Dumbbell,
    title: 'Prevention Before Pills',
    description:
      'Screening, nutrition and movement plans come first; medication is the tool we reach for when lifestyle is not enough.',
  },
  {
    icon: Stethoscope,
    title: 'Coordinated Specialist Care',
    description:
      'When you need a specialist, I refer to people I know personally and follow up with them so nothing falls through.',
  },
];

const values = [
  'You are a person, not a chart number.',
  'No question is too small — ask it twice if you need to.',
  'We decide your treatment together, never for you.',
  'If something is wrong, you will hear it from me directly.',
];

export default function Careers() {
  return (
    <div className="careers-page">
      {/* ---- Page Hero ---- */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <div className="careers-chip">
            <span className="careers-chip-dot" aria-hidden="true" />
            <span className="careers-chip-text">Patient Stories</span>
          </div>
          <h1 className="careers-title">
            Real patients,
            <br />
            <span className="highlight">real outcomes.</span>
          </h1>
          <p className="careers-subtitle">
            Six stories from people who trusted this practice with their
            health — in their own words, unedited, exactly as they sent them
            to us.
          </p>
        </div>
      </section>

      {/* ---- Open Roles ---- */}
      <section className="careers-roles">
        <div className="careers-section-header">
          <span className="careers-section-label">Patient Stories</span>
          <h2 className="careers-section-title">In their own words.</h2>
        </div>
        <div className="careers-roles-list">
          {openRoles.map((role) => (
            <article className="careers-role-card" key={role.title}>
              <div className="careers-role-info">
                <span className="careers-role-dept">{role.department}</span>
                <h3 className="careers-role-title">{role.title}</h3>
                <div className="careers-role-meta">
                  <span className="careers-role-meta-item">
                    <User size={14} strokeWidth={2} />
                    {role.location}
                  </span>
                  <span className="careers-role-meta-item">
                    <Star size={14} strokeWidth={2} />
                    {role.type}
                  </span>
                </div>
                <div className="careers-role-tags">
                  {role.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="careers-role-apply">
                Book a Visit
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Benefits ---- */}
      <section className="careers-benefits">
        <div className="careers-section-header">
          <span className="careers-section-label">Why Patients Stay</span>
          <h2 className="careers-section-title">
            What keeps people coming back.
          </h2>
        </div>
        <div className="careers-benefits-grid">
          {benefits.map((b) => (
            <article className="careers-benefit-card" key={b.title}>
              <div className="careers-benefit-icon">
                <b.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="careers-benefit-title">{b.title}</h3>
              <p className="careers-benefit-desc">{b.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---- CTA (placed mid-page, before culture) ---- */}
      <section className="careers-cta">
        <div className="careers-cta-content">
          <h2 className="careers-cta-title">
            Ready to become the next patient story?
          </h2>
          <p className="careers-cta-desc">
            New patients are welcome. Book a first consultation and see for
            yourself what a 30-minute appointment feels like.
          </p>
          <div className="careers-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book an Appointment
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Doctor's Name
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Culture ---- */}
      <section className="careers-culture">
        <div className="careers-culture-content">
          <div className="careers-culture-text">
            <span className="careers-section-label">My Promise</span>
            <h2 className="careers-section-title">
              How this practice treats you.
            </h2>
            <p className="careers-culture-desc">
              Four commitments I make to every person who walks through the
              door — and the standards my own reviews are held to.
            </p>
            <ul className="careers-culture-values">
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="careers-culture-stats">
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">11,000+</span>
              <span className="careers-culture-stat-label">Patients Treated</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">96%</span>
              <span className="careers-culture-stat-label">Would Recommend</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">18</span>
              <span className="careers-culture-stat-label">Years In Practice</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">&lt;10m</span>
              <span className="careers-culture-stat-label">Average Wait</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
