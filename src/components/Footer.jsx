import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile, social } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__role">| {profile.role}</span>
        </div>

        <p className="footer__built">
          Built with <span className="accent-red">&lt;3</span> using React, Vite &amp; Framer Motion
        </p>

        <div className="footer__socials">
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}