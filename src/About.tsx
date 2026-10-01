import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Lightbulb,
  HeartHandshake,
  Globe,
  Users,
  Award,
  Microscope,
  FlaskConical,
} from 'lucide-react';
import './About.css';

const values = [
  {
    icon: Target,
    title: 'Thoroughness',
    description:
      'No symptom dismissed and no chart closed until every loose end is checked — even the ones that turn out to be nothing.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    description:
      'Medicine rewards the doctor who keeps asking why. New research is read every week and brought into the room when it matters.',
  },
  {
    icon: HeartHandshake,
    title: 'Empathy',
    description:
      'You will be treated as a whole person — family, work and worries included — not as a set of lab values to normalize.',
  },
  {
    icon: Globe,
    title: 'Community',
    description:
      'Free annual screening days, school health talks and pro-bono consults keep this practice rooted in the neighborhood it serves.',
  },
];

const milestones = [
  {
    year: '2007',
    title: 'Medical Degree',
    description:
      'Graduated medical school with honors, with early clinical rotations in cardiology and family medicine.',
  },
  {
    year: '2011',
    title: 'Family Medicine Residency',
    description:
      'Completed residency managing chronic disease panels, deliveries and emergency shifts across three hospitals.',
  },
  {
    year: '2014',
    title: 'Doctor Clinic Opens',
    description:
      'Opened a solo practice built on one promise: every patient gets thirty unhurried minutes and a doctor who follows up.',
  },
  {
    year: '2021',
    title: 'First Peer-Reviewed Study',
    description:
      'Published research on plain-language lab communication — now standard practice at every new-patient visit.',
  },
];

const stats = [
  { icon: Users, value: '11,000+', label: 'Patients Treated' },
  { icon: Award, value: '4.9', label: 'Patient Rating' },
  { icon: FlaskConical, value: '24', label: 'Publications' },
  { icon: Globe, value: '18', label: 'Years Practicing' },
];

const team = [
  {
    name: "Doctor's Name",
    role: 'Founder & Family Physician',
    bio: 'Board-certified in family medicine with 18 years of clinic experience and a weekly research habit.',
  },
  {
    name: 'Sarah Okafor',
    role: 'Lead Nurse',
    bio: 'Fourteen years in primary care — runs vaccinations, chronic-care check-ins and every calm reassurance.',
  },
  {
    name: 'Lucia Rivera',
    role: 'Practice Manager',
    bio: 'Keeps scheduling, billing and insurance running smoothly so patients never face a surprise bill.',
  },
  {
    name: 'Grace Chen',
    role: 'Medical Assistant',
    bio: 'Vitals, lab draws, and the person who somehow remembers every patient’s dog’s name.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* ---- Page Hero ---- */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-chip">
            <span className="about-chip-dot" aria-hidden="true" />
            <span className="about-chip-text">About Doctor's Name</span>
          </div>
          <h1 className="about-title">
            Doctor, teacher, lifelong
            <br />
            <span className="highlight">student</span> of medicine.
          </h1>
          <p className="about-subtitle">
            Doctor's Name runs a solo family-medicine practice that blends
            clinic time, teaching and preventive-care research — one patient,
            one honest conversation at a time.
          </p>
        </div>
      </section>

      {/* ---- Stats Bar ---- */}
      <section className="about-stats">
        <div className="about-stats-container">
          {stats.map((stat) => (
            <div className="about-stat-item" key={stat.label}>
              <stat.icon className="about-stat-icon" size={24} strokeWidth={1.5} />
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Mission Section ---- */}
      <section className="about-mission">
        <div className="about-mission-content">
          <div className="about-mission-text">
            <span className="about-section-label">My Mission</span>
            <h2 className="about-section-title">
              Advanced care with a
              <br />
              <span className="highlight">human</span> face.
            </h2>
            <p className="about-section-desc">
              I believe good medicine should not require a hospital maze, a
              six-week wait, or a doctor who never looks up from the screen.
              This practice exists to give neighbors unhurried, evidence-based
              care — the kind you would want for your own family.
            </p>
            <p className="about-section-desc">
              From same-day labs to telehealth follow-ups, every part of the
              clinic is designed around one goal: catching problems early and
              explaining them clearly.
            </p>
          </div>
          <div className="about-mission-visual">
            <div className="about-mission-card">
              <FlaskConical size={32} strokeWidth={1.5} />
              <span>Same-Day Labs</span>
            </div>
            <div className="about-mission-card about-mission-card-offset">
              <Microscope size={32} strokeWidth={1.5} />
              <span>Evidence-Based Care</span>
            </div>
            <div className="about-mission-card">
              <Globe size={32} strokeWidth={1.5} />
              <span>Telehealth Anywhere</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values Section ---- */}
      <section className="about-values">
        <div className="about-values-header">
          <span className="about-section-label">What I Stand For</span>
          <h2 className="about-section-title">What drives every appointment.</h2>
        </div>
        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <div className="about-value-icon">
                <value.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-desc">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Timeline Section ---- */}
      <section className="about-timeline-section">
        <div className="about-timeline-header">
          <span className="about-section-label">My Journey</span>
          <h2 className="about-section-title">Milestones that shaped this practice.</h2>
        </div>
        <div className="about-timeline">
          {milestones.map((milestone) => (
            <div className="about-timeline-item" key={milestone.year}>
              <div className="about-timeline-year">{milestone.year}</div>
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">{milestone.title}</h3>
                <p className="about-timeline-desc">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Team Section ---- */}
      <section className="about-team">
        <div className="about-team-header">
          <span className="about-section-label">The Team</span>
          <h2 className="about-section-title">The people you will meet.</h2>
        </div>
        <div className="about-team-grid">
          {team.map((member) => (
            <article className="about-team-card" key={member.name}>
              <div className="about-team-avatar" aria-hidden="true">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="about-team-name">{member.name}</h3>
              <span className="about-team-role">{member.role}</span>
              <p className="about-team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---- CTA Section ---- */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2 className="about-cta-title">
            Come say hello in person.
          </h2>
          <p className="about-cta-desc">
            Whether you are a prospective patient, a colleague, or a student
            hoping to shadow — the door is open.
          </p>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book an Appointment
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/careers" className="btn-secondary">
              Patient Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
