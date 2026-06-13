import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiStar, FiGitBranch, FiExternalLink, FiLock, FiGlobe } from 'react-icons/fi';
import { projects, social } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading command="ls -la ~/projects" />
      <p className="section-hint">Pinned repositories</p>

      <div className="repos">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable
              glareMaxOpacity={0.08}
              glareColor="#38e1ff"
              glarePosition="all"
              className="repo"
            >
              <div className="repo__top">
                <span className="repo__name">
                  <FiGitBranch className="repo__icon" />
                  {p.name}
                </span>
                <span className="repo__vis">
                  {p.visibility === 'Private' ? <FiLock /> : <FiGlobe />}
                  {p.visibility}
                </span>
              </div>

              <p className="repo__desc">{p.description}</p>

              <div className="tag-row">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="repo__meta">
                <span className="repo__lang">
                  <span
                    className="repo__lang-dot"
                    style={{ background: p.languageColor }}
                  />
                  {p.language}
                </span>
                <span className="repo__stat">
                  <FiStar /> {p.stars}
                </span>
                <span className="repo__stat">
                  <FiGitBranch /> {p.forks}
                </span>
                {p.demo && p.demo !== '#' && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="repo__demo">
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="repos__footer">
        <a href={social.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
          View all repositories
        </a>
      </div>
    </section>
  );
}