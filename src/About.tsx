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
    title: 'Precision',
    description:
      'Every experiment, every sequence, every result is executed with uncompromising accuracy and attention to detail.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We push the boundaries of what is possible in biotechnology, investing heavily in R&D to stay ahead of the curve.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description:
      'Transparent practices, ethical research, and honest communication form the foundation of everything we do.',
  },
  {
    icon: Globe,
    title: 'Impact',
    description:
      'Our work reaches laboratories and clinics worldwide, improving lives across borders and communities.',
  },
];

const milestones = [
  {
    year: '2012',
    title: 'Founded',
    description:
      'Genova Biosciences was founded with a vision to democratize access to advanced genomic tools.',
  },
  {
    year: '2016',
    title: 'First Platform Launch',
    description:
      'Launched our proprietary genomic sequencing platform, reducing turnaround time by 60%.',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description:
      'Expanded operations to 12 countries with partnerships across leading research institutions.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description:
      'Integrated machine learning pipelines into drug discovery, cutting lead identification time in half.',
  },
];

const stats = [
  { icon: Users, value: '350+', label: 'Team Members' },
  { icon: Globe, value: '12', label: 'Countries' },
  { icon: Award, value: '120+', label: 'Patents' },
  { icon: Microscope, value: '500+', label: 'Research Partners' },
];

const team = [
  {
    name: 'Dr. Elena Voss',
    role: 'Chief Executive Officer',
    bio: 'Former director at NIH with 20+ years in genomic research and biotech leadership.',
  },
  {
    name: 'Dr. Marcus Chen',
    role: 'Chief Scientific Officer',
    bio: 'Pioneer in CRISPR-based therapies with over 80 published papers in nature and science.',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'VP of Research',
    bio: 'Leads our drug discovery division, previously headed oncology programs at Genentech.',
  },
  {
    name: 'James Whitfield',
    role: 'Chief Technology Officer',
    bio: 'Architect of our AI-driven bioinformatics platform, ex-Google DeepMind.',
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
            <span className="about-chip-text">About Genova</span>
          </div>
          <h1 className="about-title">
            We are scientists, engineers, and
            <br />
            <span className="highlight">dreamers</span> building the future of biology.
          </h1>
          <p className="about-subtitle">
            Founded in 2012, Genova Biosciences has grown from a small research
            team into a global biotechnology company dedicated to advancing
            human health through innovation.
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
            <span className="about-section-label">Our Mission</span>
            <h2 className="about-section-title">
              Making advanced biotechnology
              <br />
              <span className="highlight">accessible to all.</span>
            </h2>
            <p className="about-section-desc">
              We believe that breakthrough science should not be confined to a
              handful of elite institutions. Genova Biosciences builds tools and
              platforms that put cutting-edge genomic capabilities within reach
              of researchers, clinicians, and patients around the world.
            </p>
            <p className="about-section-desc">
              From high-throughput sequencing to AI-driven drug discovery, every
              solution we create is designed with one goal: accelerating the
              path from discovery to impact.
            </p>
          </div>
          <div className="about-mission-visual">
            <div className="about-mission-card">
              <FlaskConical size={32} strokeWidth={1.5} />
              <span>Research Lab</span>
            </div>
            <div className="about-mission-card about-mission-card-offset">
              <Microscope size={32} strokeWidth={1.5} />
              <span>Genomics Core</span>
            </div>
            <div className="about-mission-card">
              <Globe size={32} strokeWidth={1.5} />
              <span>Global Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values Section ---- */}
      <section className="about-values">
        <div className="about-values-header">
          <span className="about-section-label">Our Values</span>
          <h2 className="about-section-title">What drives us every day.</h2>
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
          <span className="about-section-label">Our Journey</span>
          <h2 className="about-section-title">Milestones that shaped us.</h2>
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
          <span className="about-section-label">Leadership</span>
          <h2 className="about-section-title">The people behind the science.</h2>
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
            Want to be part of our story?
          </h2>
          <p className="about-cta-desc">
            Whether you are a researcher, partner, or future team member, we
            would love to hear from you.
          </p>
          <div className="about-cta-actions">
            <a href="#contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </a>
            <a href="#careers" className="btn-secondary">
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
