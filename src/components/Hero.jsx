import { motion } from 'framer-motion';
import { FiTerminal, FiGithub, FiArrowRight } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';
import { profile, social } from '../data/portfolio.js';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: 'easeOut' },
  }),
};

// Lines for the faux code editor. [text, className]
const codeLines = [
  [['import', 'kw'], [' { Developer } ', 'txt'], ['from', 'kw'], [" './universe';", 'str']],
  [],
  [['const', 'kw'], [' Portfolio ', 'fn'], ['= () => {', 'txt']],
  [['  return', 'kw'], [' (', 'txt']],
  [['    <Developer', 'tag']],
  [['      name', 'attr'], ['=', 'txt'], [`"${profile.name}"`, 'str']],
  [['      role', 'attr'], ['=', 'txt'], ['"Full Stack Engineer"', 'str']],
  [['      passion', 'attr'], ['=', 'txt'], [`"${profile.tagline}"`, 'str']],
  [['    />', 'tag']],
  [['  );', 'txt']],
  [['};', 'txt']],
];

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero__grid">
        {/* LEFT — copy */}
        <div className="hero__copy">
          <motion.div
            className="kernel-badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="kernel-badge__dot" />
            SYSTEM.KERNEL :: {profile.kernelVersion} {profile.status}
          </motion.div>

          <motion.h1
            className="hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Hello, I&apos;m <span className="accent-cyan">{profile.name}</span>
          </motion.h1>

          <motion.p
            className="hero__sub"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            <span className="accent-magenta">&lt;Architect /&gt;</span> {profile.tagline}.{' '}
            {profile.blurb}
          </motion.p>

          <motion.div
            className="hero__cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <HashLink smooth to="#projects" className="btn btn--primary">
              <FiTerminal />
              <span>Initialize OS</span>
              <span className="btn__hint">sudo boot_gui</span>
            </HashLink>
            <a href={social.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              <FiGithub />
              <span>Check out GitHub</span>
            </a>
          </motion.div>

          <motion.div
            className="modules"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <span className="modules__label">LOADED_MODULES:</span>
            <div className="modules__track">
              {profile.loadedModules.map((m) => (
                <span key={m} className="modules__chip">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — code editor */}
        <motion.div
          className="editor"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="editor__bar">
            <span className="editor__dots">
              <i className="dot dot--red" />
              <i className="dot dot--amber" />
              <i className="dot dot--green" />
            </span>
            <span className="editor__tab">portfolio.tsx</span>
            <span className="editor__bar-spacer" />
          </div>

          <div className="editor__body">
            <pre className="editor__code">
              {codeLines.map((line, i) => (
                <div className="code-line" key={i}>
                  <span className="code-line__no">{i + 1}</span>
                  <span className="code-line__content">
                    {line.length === 0
                      ? '\u00A0'
                      : line.map(([text, cls], j) => (
                          <span key={j} className={`tok tok--${cls}`}>
                            {text}
                          </span>
                        ))}
                  </span>
                </div>
              ))}
            </pre>
          </div>

          <div className="editor__footer">
            <button className="editor__run">
              <FiArrowRight /> Run Profile
            </button>
            <HashLink smooth to="#projects" className="editor__view">
              View Projects
            </HashLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}