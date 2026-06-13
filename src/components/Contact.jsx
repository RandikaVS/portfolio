import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck } from 'react-icons/fi';
import { contact, social } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const jsonLines = [
  ['{', null],
  [`  "status": `, `"${contact.status}",`],
  [`  "email": `, `"${contact.email}",`],
  ['  "socials": {', null],
  [`    "github": `, `"${social.githubUser}",`],
  [`    "linkedin": `, `"${social.linkedinUser}"`],
  ['  },', null],
  [`  "location": `, `"${contact.location}"`],
  ['}', null],
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Default: open the user's mail client. Swap this for Formspree / EmailJS / your API.
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <SectionHeading command="./contact.exe" />

      <div className="contact__grid">
        {/* JSON viewer */}
        <motion.div
          className="json-card"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="editor__bar">
            <span className="editor__dots">
              <i className="dot dot--red" />
              <i className="dot dot--amber" />
              <i className="dot dot--green" />
            </span>
            <span className="editor__tab">contact_info.json</span>
          </div>
          <pre className="json-card__body">
            {jsonLines.map(([key, val], i) => (
              <div className="code-line" key={i}>
                <span className="code-line__no">{i + 1}</span>
                <span className="code-line__content">
                  <span className="tok tok--attr">{key}</span>
                  {val && <span className="tok tok--str">{val}</span>}
                </span>
              </div>
            ))}
          </pre>
          <p className="json-card__waiting">// Waiting for connection…<span className="caret">_</span></p>
        </motion.div>

        {/* compose form */}
        <motion.div
          className="compose"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="editor__bar">
            <span className="editor__tab editor__tab--active">sendMessage.ts</span>
            <span className="compose__secure">secure channel</span>
          </div>

          <div className="compose__body">
            <div className="compose__route">
              <span>to: {contact.email}</span>
              <span>response: {contact.responseTime}</span>
            </div>

            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input value={form.name} onChange={update('name')} placeholder="Jane Doe" />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@example.com"
                />
              </label>
            </div>

            <label className="field">
              <span>Subject</span>
              <input value={form.subject} onChange={update('subject')} placeholder="Project enquiry" />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about your project…"
              />
            </label>

            <p className="compose__note">// Protected by spam filters and rate limits</p>

            <button className="btn btn--primary compose__send" onClick={handleSubmit}>
              {sent ? (
                <>
                  <FiCheck /> Message ready
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}