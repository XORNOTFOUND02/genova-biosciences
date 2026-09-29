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
    icon: Dna,
    title: 'Genomic Medicine',
    description:
      'Mapping the genetic basis of disease to enable personalized treatment plans tailored to each patient\u2019s unique genomic profile.',
    tags: ['Pharmacogenomics', 'Rare Diseases', 'Oncogenomics'],
  },
  {
    icon: HeartPulse,
    title: 'Cardiovascular Genomics',
    description:
      'Identifying hereditary cardiac risk factors and developing early-intervention strategies for inherited heart conditions.',
    tags: ['Risk Prediction', 'LVH Markers', 'Arrhythmia Genes'],
  },
  {
    icon: Microscope,
    title: 'Immunotherapy Research',
    description:
      'Engineering next-generation CAR-T and antibody therapies guided by single-cell transcriptomic profiling.',
    tags: ['CAR-T', 'Single-Cell', 'Tumor Microenvironment'],
  },
  {
    icon: Beaker,
    title: 'Synthetic Biology',
    description:
      'Designing biological circuits and engineered organisms for therapeutic production and environmental applications.',
    tags: ['Gene Circuits', 'Biosensors', 'Metabolic Engineering'],
  },
];

const publications = [
  {
    journal: 'Nature Genetics',
    year: '2025',
    title: 'Population-scale variant calling improves pathogenicity prediction across diverse ancestries',
    authors: 'Voss E., Chen M., Nair P. et al.',
    doi: '10.1038/ng.2025.0412',
  },
  {
    journal: 'Cell',
    year: '2024',
    title: 'Federated deep learning enables multi-institutional genomic analysis without data sharing',
    authors: 'Whitfield J., Chen M., et al.',
    doi: '10.1016/cell.2024.08.019',
  },
  {
    journal: 'The Lancet',
    year: '2024',
    title: 'Clinical utility of AI-driven pharmacogenomic dosing in a prospective multicenter trial',
    authors: 'Nair P., Voss E., et al.',
    doi: '10.1016/S0140-6736(24)01234-5',
  },
  {
    journal: 'Science Translational Medicine',
    year: '2023',
    title: 'Single-cell atlas of treatment-resistant tumors reveals targetable resistance mechanisms',
    authors: 'Chen M., Nair P., et al.',
    doi: '10.1126/scitranslmed.2023.0456',
  },
];

const trials = [
  {
    phase: 'Phase III',
    status: 'Active',
    title: 'GENO-CV: Genomic Risk Stratification in Heart Failure',
    enrollment: '2,400 patients',
    sites: '18 clinical sites',
  },
  {
    phase: 'Phase II',
    status: 'Active',
    title: 'HELIX-ONC: Personalized Oncology via AI-Guided Therapy Selection',
    enrollment: '800 patients',
    sites: '12 clinical sites',
  },
  {
    phase: 'Phase I',
    status: 'Recruiting',
    title: 'SYNTH-IMM: Synthetic Antibody Scaffold for Autoimmune Disorders',
    enrollment: '60 patients',
    sites: '4 clinical sites',
  },
  {
    phase: 'Phase II',
    status: 'Completed',
    title: 'PHARMA-GX: Pharmacogenomic-Guided Dosing in Pediatric Care',
    enrollment: '1,200 patients',
    sites: '9 clinical sites',
  },
];

const stats = [
  { icon: BookOpen, value: '340+', label: 'Publications' },
  { icon: FlaskConical, value: '48', label: 'Active Trials' },
  { icon: Users, value: '92', label: 'Research Partners' },
  { icon: Dna, value: '14', label: 'Patent Families' },
];

export default function Research() {
  return (
    <div className="research-page">
      {/* ---- Page Hero ---- */}
      <section className="research-hero">
        <div className="research-hero-content">
          <div className="research-chip">
            <span className="research-chip-dot" aria-hidden="true" />
            <span className="research-chip-text">Research & Discovery</span>
          </div>
          <h1 className="research-title">
            Pushing the boundaries of
            <br />
            <span className="highlight">what medicine can do.</span>
          </h1>
          <p className="research-subtitle">
            Our research programs span genomic medicine, immunotherapy, and
            synthetic biology — translating fundamental discoveries into
            clinical applications that improve patient outcomes worldwide.
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
          <span className="research-section-label">Focus Areas</span>
          <h2 className="research-section-title">Where we direct our science.</h2>
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
          <h2 className="research-section-title">Active and recent studies.</h2>
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

      {/* ---- Publications ---- */}
      <section className="research-publications">
        <div className="research-section-header">
          <span className="research-section-label">Selected Publications</span>
          <h2 className="research-section-title">Peer-reviewed contributions.</h2>
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

      {/* ---- CTA ---- */}
      <section className="research-cta">
        <div className="research-cta-content">
          <h2 className="research-cta-title">
            Collaborate with our research team.
          </h2>
          <p className="research-cta-desc">
            Whether you are an academic institution, hospital network, or
            biotech partner — we welcome research collaborations that advance
            human health.
          </p>
          <div className="research-cta-actions">
            <a href="#contact" className="btn-primary">
              Propose a Collaboration
              <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
            </a>
            <a href="#technology" className="btn-secondary">
              Our Technology
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
