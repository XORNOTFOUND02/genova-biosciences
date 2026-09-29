import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  GraduationCap,
  Plane,
  PiggyBank,
  Dumbbell,
} from 'lucide-react';
import './Careers.css';

const openRoles = [
  {
    title: 'Senior Genomic Data Scientist',
    department: 'Research & Development',
    location: 'Boston, MA',
    type: 'Full-time',
    tags: ['Python', 'Deep Learning', 'Genomics'],
  },
  {
    title: 'Clinical Laboratory Scientist',
    department: 'Diagnostics',
    location: 'San Francisco, CA',
    type: 'Full-time',
    tags: ['CLIA', 'NGS', 'Molecular Biology'],
  },
  {
    title: 'Full-Stack Engineer',
    department: 'Platform Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Regulatory Affairs Manager',
    department: 'Quality & Compliance',
    location: 'Washington, D.C.',
    type: 'Full-time',
    tags: ['FDA', 'ISO 13485', 'IVDR'],
  },
  {
    title: 'Bioinformatics Intern',
    department: 'Research & Development',
    location: 'Boston, MA',
    type: 'Internship',
    tags: ['R', 'Pipeline Dev', 'Wet Lab'],
  },
  {
    title: 'Field Application Scientist',
    department: 'Commercial',
    location: 'Chicago, IL',
    type: 'Full-time',
    tags: ['Customer Facing', 'Sequencing', 'Training'],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Comprehensive Health',
    description:
      'Medical, dental, and vision coverage for you and your family — 100% premiums covered for employees.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Budget',
    description:
      '$5,000 annual stipend for conferences, courses, certifications, and continued education.',
  },
  {
    icon: Plane,
    title: 'Generous PTO',
    description:
      'Unlimited paid time off with a mandatory 3-week minimum, plus company-wide shutdown weeks.',
  },
  {
    icon: PiggyBank,
    title: 'Equity & Retirement',
    description:
      'Competitive equity packages and 401(k) matching at 6% from day one of employment.',
  },
  {
    icon: Dumbbell,
    title: 'Wellness Program',
    description:
      'On-site fitness centers, mental health support, and a $200/month wellness allowance.',
  },
  {
    icon: Briefcase,
    title: 'Hybrid Flexibility',
    description:
      'Choose your work arrangement — fully remote, hybrid, or on-site. We trust you to do your best work.',
  },
];

const values = [
  'Science first — every decision is grounded in evidence.',
  'Diversity drives discovery — we recruit across disciplines and backgrounds.',
  'Patients at the center — our work ultimately serves human health.',
  'Intellectual honesty — we publish results even when they surprise us.',
];

export default function Careers() {
  return (
    <div className="careers-page">
      {/* ---- Page Hero ---- */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <div className="careers-chip">
            <span className="careers-chip-dot" aria-hidden="true" />
            <span className="careers-chip-text">Careers at Genova</span>
          </div>
          <h1 className="careers-title">
            Do the best work of your life
            <br />
            <span className="highlight">in service of science.</span>
          </h1>
          <p className="careers-subtitle">
            Join a team of scientists, engineers, and clinicians working to
            make genomic medicine accessible to everyone. We are hiring across
            research, engineering, and commercial teams.
          </p>
        </div>
      </section>

      {/* ---- Open Roles ---- */}
      <section className="careers-roles">
        <div className="careers-section-header">
          <span className="careers-section-label">Open Positions</span>
          <h2 className="careers-section-title">Find your next role.</h2>
        </div>
        <div className="careers-roles-list">
          {openRoles.map((role) => (
            <article className="careers-role-card" key={role.title}>
              <div className="careers-role-info">
                <span className="careers-role-dept">{role.department}</span>
                <h3 className="careers-role-title">{role.title}</h3>
                <div className="careers-role-meta">
                  <span className="careers-role-meta-item">
                    <MapPin size={14} strokeWidth={2} />
                    {role.location}
                  </span>
                  <span className="careers-role-meta-item">
                    <Clock size={14} strokeWidth={2} />
                    {role.type}
                  </span>
                </div>
                <div className="careers-role-tags">
                  {role.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <a href="#apply" className="careers-role-apply">
                Apply
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Benefits ---- */}
      <section className="careers-benefits">
        <div className="careers-section-header">
          <span className="careers-section-label">Benefits & Perks</span>
          <h2 className="careers-section-title">
            We invest in our people.
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

      {/* ---- Culture ---- */}
      <section className="careers-culture">
        <div className="careers-culture-content">
          <div className="careers-culture-text">
            <span className="careers-section-label">Our Culture</span>
            <h2 className="careers-section-title">
              What it is like to work here.
            </h2>
            <p className="careers-culture-desc">
              We are a team of 350+ people across 12 countries who share a
              belief that genomic medicine can transform healthcare — and that
              building it requires the best minds from every discipline.
            </p>
            <ul className="careers-culture-values">
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="careers-culture-stats">
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">350+</span>
              <span className="careers-culture-stat-label">Team Members</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">12</span>
              <span className="careers-culture-stat-label">Countries</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">4.8</span>
              <span className="careers-culture-stat-label">Glassdoor Rating</span>
            </div>
            <div className="careers-culture-stat">
              <span className="careers-culture-stat-value">94%</span>
              <span className="careers-culture-stat-label">Retention Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="careers-cta">
        <div className="careers-cta-content">
          <h2 className="careers-cta-title">
            Do not see your role listed?
          </h2>
          <p className="careers-cta-desc">
            We are always looking for exceptional talent. Send us your resume
            and tell us how you would like to contribute.
          </p>
          <div className="careers-cta-actions">
            <a href="#contact" className="btn-primary">
              Send Your Resume
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </a>
            <a href="#about" className="btn-secondary">
              About Genova
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
