import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  Dna,
  HeartPulse,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';
import './Solutions.css';

const solutions = [
  {
    icon: Microscope,
    title: 'Genomic Sequencing',
    description:
      'High-throughput sequencing platforms delivering precise, full-genome analysis for research and clinical diagnostics.',
    features: ['Whole Genome Sequencing', 'Targeted Panels', 'Single-Cell Analysis'],
  },
  {
    icon: FlaskConical,
    title: 'Drug Discovery',
    description:
      'AI-powered compound screening and lead optimization pipelines that accelerate therapeutic development from concept to clinic.',
    features: ['Virtual Screening', 'ADMET Prediction', 'Lead Optimization'],
  },
  {
    icon: Dna,
    title: 'Gene Therapy',
    description:
      'Next-generation viral and non-viral vector systems for safe, efficient, and targeted gene delivery.',
    features: ['AAV Vectors', 'LNP Delivery', 'CRISPR Integration'],
  },
  {
    icon: HeartPulse,
    title: 'Diagnostics',
    description:
      'Rapid, accurate point-of-care and laboratory diagnostic solutions for infectious diseases, oncology, and rare conditions.',
    features: ['PCR Platforms', 'Immunoassays', 'Biomarker Detection'],
  },
  {
    icon: ShieldCheck,
    title: 'Biosafety & Compliance',
    description:
      'Comprehensive regulatory consulting and biosafety assessments ensuring your projects meet global standards.',
    features: ['GLP/GMP Compliance', 'Risk Assessment', 'Regulatory Filing'],
  },
  {
    icon: Zap,
    title: 'Bioprocessing',
    description:
      'Scalable biomanufacturing solutions from upstream cell culture to downstream purification and quality control.',
    features: ['Cell Line Development', 'Downstream Processing', 'QC Analytics'],
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Research Partners' },
  { icon: TrendingUp, value: '98.7%', label: 'Sequencing Accuracy' },
  { icon: Award, value: '120+', label: 'Patents Filed' },
  { icon: FlaskConical, value: '35+', label: 'Pipeline Candidates' },
];

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* ---- Page Hero ---- */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <div className="solutions-chip">
            <span className="solutions-chip-dot" aria-hidden="true" />
            <span className="solutions-chip-text">Our Solutions</span>
          </div>
          <h1 className="solutions-title">
            Precision biotechnology for
            <br />
            <span className="highlight">every stage</span> of discovery.
          </h1>
          <p className="solutions-subtitle">
            From genomic sequencing to therapeutic manufacturing, Genova
            Biosciences provides end-to-end solutions that empower researchers,
            clinicians, and partners worldwide.
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

      {/* ---- Solutions Grid ---- */}
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
                Learn More
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
            Ready to accelerate your research?
          </h2>
          <p className="solutions-cta-desc">
            Our team of scientists and engineers is ready to discuss how Genova
            can support your next breakthrough.
          </p>
          <div className="solutions-cta-actions">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Genova
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
