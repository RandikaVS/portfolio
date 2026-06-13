import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiUser } from 'react-icons/fi';
import { about, profile } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading prefix="#" title="About" />

      <div className="about__grid">
        {/* avatar / profile card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Tilt
            glareEnable
            glareMaxOpacity={0.12}
            glareColor="#38e1ff"
            glarePosition="all"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            className="profile-card"
          >
            <div className="profile-card__photo">
              {/* To use a photo: import { profile } from '../data/portfolio.js'
                  then replace this block with: */}
                  <img src={profile.profileImg} alt={profile.name} />
              {/* <div className="profile-card__placeholder">
                <FiUser />
              </div> */}
              <span className="profile-card__scan" />
            </div>
            <dl className="profile-card__meta">
              <div>
                <dt>OPERATOR</dt>
                <dd>{about.card.operator}</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>{about.card.role}</dd>
              </div>
              <div>
                <dt>EDUCATION</dt>
                <dd>{about.education}</dd>
              </div>
              <div>
                <dt>LOCATION</dt>
                <dd>{about.card.location}</dd>
              </div>
              <div>
                <dt>STATUS</dt>
                <dd className="status-online">
                  <span className="dot dot--green" /> {about.card.status}
                </dd>
              </div>
            </dl>
          </Tilt>
        </motion.div>

        {/* terminal log */}
        <motion.div
          className="termcard"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="termcard__bar">
            <span className="editor__dots">
              <i className="dot dot--red" />
              <i className="dot dot--amber" />
              <i className="dot dot--green" />
            </span>
            <span className="termcard__title">user_profile.log</span>
          </div>

          <div className="termcard__body">
            {about.log.map((entry, i) => (
              <div className="log-entry" key={i}>
                <p className="log-entry__cmd">
                  <span className="arrow">➜</span> {entry.cmd}
                </p>
                <p className="log-entry__out">{entry.out}</p>
              </div>
            ))}

            <div className="stats">
              {about.stats.map((s) => (
                <div className="stats__item" key={s.label}>
                  <span className="stats__value">{s.value}</span>
                  <span className="stats__unit">{s.unit}</span>
                  <span className="stats__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}