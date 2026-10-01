import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

  const offices: { icon: typeof MapPin; label: string; value: string; href?: string }[] = [
    { icon: MapPin, label: 'Clinic', value: '750 Cambridge Street, Boston, MA 02114' },
    { icon: Phone, label: 'Phone', value: '+1 (617) 555-0140', href: 'tel:+16175550140' },
    { icon: Mail, label: 'Email', value: 'hello@doctorclinic.example.com', href: 'mailto:hello@doctorclinic.example.com' },
    { icon: Clock, label: 'Hours', value: 'Mon – Fri, 8:00 AM – 5:00 PM EST' },
  ];

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=750+Cambridge+Street+Boston+MA+02114';

const subjects = ['New Appointment', 'Follow-Up Visit', 'Prescription Refill', 'Billing & Insurance', 'Other'];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name';
  if (!data.email.trim()) errors.email = 'Please enter your email';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address';
  if (!data.message.trim()) errors.message = 'Please enter a message';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: 'New Appointment', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [searchParams] = useSearchParams();

  // Prefill from URL: /contact?subject=New%20Appointment&role=...
  useEffect(() => {
    const subject = searchParams.get('subject');
    const role = searchParams.get('role');
    setForm((prev) => {
      const next = { ...prev };
      if (subject && subjects.includes(subject)) next.subject = subject;
      if (role) {
        next.subject = 'Other';
        next.message = `I would like to ask about: ${role}.`;
      }
      return next;
    });
  }, [searchParams]);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSending(true);
    // Simulate network request
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  const reset = () => {
    setForm({ name: '', email: '', subject: 'New Appointment', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* ---- Hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-chip">
            <span className="contact-chip-dot" aria-hidden="true" />
            <span className="contact-chip-text">Book Appointment</span>
          </div>
          <h1 className="contact-title">
            Let us get you
            <br />
            <span className="highlight">feeling better.</span>
          </h1>
          <p className="contact-subtitle">
            Request a first consultation, a follow-up, or a prescription
            refill — describe what you need and the clinic will confirm a
            time within one business day.
          </p>
        </div>
      </section>

      <section className="contact-body">
        {/* ---- Form ---- */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success" role="status">
              <CheckCircle size={48} strokeWidth={1.5} />
              <h2>Request received!</h2>
              <p>
                Thank you, {form.name || 'friend'}. The clinic has your
                request and will confirm your appointment at{' '}
                <strong>{form.email}</strong> within one business day.
              </p>
              <button type="button" className="btn-primary" onClick={reset}>
                Send Another Request
                <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="contact-form-title">Request an appointment</h2>

              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <span id="contact-name-error" className="contact-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <span id="contact-email-error" className="contact-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Describe your symptoms, preferred days or times..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <span id="contact-message-error" className="contact-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-primary contact-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Request'}
                {!sending && <ArrowRight className="arrow-icon" size={18} strokeWidth={2} />}
              </button>
            </form>
          )}
        </div>

        {/* ---- Info ---- */}
        <div className="contact-info">
          <h2 className="contact-info-title">Clinic details</h2>
          <div className="contact-info-list">
            {offices.map((item) => (
              <div className="contact-info-item" key={item.label}>
                <div className="contact-info-icon">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="contact-info-label">{item.label}</span>
                  {item.href ? (
                    <a className="contact-info-value contact-info-link" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            className="contact-map-placeholder"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={32} strokeWidth={1.5} />
            <span>Boston, Massachusetts</span>
            <span className="contact-map-cta">Get Directions →</span>
          </a>
        </div>
      </section>
    </div>
  );
}
