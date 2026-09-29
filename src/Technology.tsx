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
    icon: Cpu,
    title: 'GenovaSeq X',
    subtitle: 'Next-Gen Sequencing Engine',
    description:
      'Our proprietary sequencing platform delivers 15x faster whole-genome analysis with 99.99% base-call accuracy, enabling same-day genomic reporting for clinical labs.',
    specs: ['15x Faster', '99.99% Accuracy', '24hr Turnaround'],
  },
  {
    icon: Workflow,
    title: 'HelixFlow',
    subtitle: 'Automated Lab Orchestration',
    description:
      'End-to-end laboratory workflow automation that connects sample prep, sequencing, and analysis into a single validated pipeline — eliminating manual handoffs.',
    specs: ['Zero Manual Entry', 'GLP Validated', 'Full Audit Trail'],
  },
  {
    icon: Database,
    title: 'BioVault',
    subtitle: 'Secure Genomic Data Lake',
    description:
      'A HIPAA-compliant, encrypted data repository designed for petabyte-scale genomic datasets with real-time access controls and immutable version history.',
    specs: ['HIPAA Compliant', 'Petabyte Scale', 'Immutable Logs'],
  },
];

const capabilities = [
  {
    icon: Microscope,
    title: 'AI-Powered Variant Calling',
    description:
      'Deep learning models trained on 40M+ genomic samples identify pathogenic variants with sensitivity exceeding traditional callers by 23%.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description:
      'Stream processing architecture delivers actionable insights in under 90 seconds from raw signal to clinical recommendation.',
  },
  {
    icon: Shield,
    title: 'Regulatory-Grade Security',
    description:
      'SOC 2 Type II certified, end-to-end encryption at rest and in transit, with role-based access controls meeting FDA 21 CFR Part 11.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description:
      'Deploy on our managed cloud or your private infrastructure. Auto-scaling Kubernetes clusters handle burst workloads seamlessly.',
  },
  {
    icon: Lock,
    title: 'Federated Learning',
    description:
      'Collaborate across institutions without sharing raw patient data. Our federated models train on distributed datasets under full privacy guarantees.',
  },
  {
    icon: Cpu,
    title: 'Edge Computing Modules',
    description:
      'Point-of-care diagnostic devices with onboard inference bring genomic analysis directly to clinics and field settings.',
  },
];

const timeline = [
  { year: '2018', milestone: 'GenovaSeq v1 launched with 50x coverage improvement' },
  { year: '2020', milestone: 'HelixFlow automation deployed in 200+ labs' },
  { year: '2022', milestone: 'AI variant caller trained on 40M samples' },
  { year: '2024', milestone: 'BioVault reaches 50 petabytes under management' },
  { year: '2025', milestone: 'Federated learning network spans 30 countries' },
];

export default function Technology() {
  return (
    <div className="tech-page">
      {/* ---- Page Hero ---- */}
      <section className="tech-hero">
        <div className="tech-hero-content">
          <div className="tech-chip">
            <span className="tech-chip-dot" aria-hidden="true" />
            <span className="tech-chip-text">Our Technology</span>
          </div>
          <h1 className="tech-title">
            Engineered for precision.
            <br />
            <span className="highlight">Built for scale.</span>
          </h1>
          <p className="tech-subtitle">
            Our technology stack combines proprietary sequencing hardware,
            cloud-native software, and artificial intelligence to deliver
            genomic insights at unprecedented speed and accuracy.
          </p>
        </div>
      </section>

      {/* ---- Platforms ---- */}
      <section className="tech-platforms">
        <div className="tech-section-header">
          <span className="tech-section-label">Core Platforms</span>
          <h2 className="tech-section-title">Three systems. One ecosystem.</h2>
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

      {/* ---- Capabilities Grid ---- */}
      <section className="tech-capabilities">
        <div className="tech-section-header">
          <span className="tech-section-label">Capabilities</span>
          <h2 className="tech-section-title">What powers our platform.</h2>
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

      {/* ---- Evolution Timeline ---- */}
      <section className="tech-timeline-section">
        <div className="tech-section-header">
          <span className="tech-section-label">Evolution</span>
          <h2 className="tech-section-title">How our technology evolved.</h2>
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
          <h2 className="tech-cta-title">See the platform in action.</h2>
          <p className="tech-cta-desc">
            Schedule a live demo with our engineering team and explore how
            Genova technology integrates into your existing workflows.
          </p>
          <div className="tech-cta-actions">
            <Link to="/contact" className="btn-primary">
              Request a Demo
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/research" className="btn-secondary">
              View Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
