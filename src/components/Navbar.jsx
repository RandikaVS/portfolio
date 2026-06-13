import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { profile, social } from '../data/portfolio.js';

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Experience', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  { label: 'Blogs', to: '#blogs' },
  { label: 'Contact', to: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav__inner">
        <HashLink smooth to="#home" className="nav__brand">
          <span className="nav__prompt">~/</span>
          <span className="nav__name">{profile.name.split(' ')[0].toLowerCase()}</span>
          <span className="nav__cursor">_</span>
        </HashLink>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <HashLink
              key={l.to}
              smooth
              to={l.to}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </HashLink>
          ))}
        </nav>

        <div className="nav__right">
          <a href={social.github} target="_blank" rel="noreferrer" className="nav__icon" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="nav__icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}