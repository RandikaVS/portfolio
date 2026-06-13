import { useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  const constraintsRef = useRef(null);

  return (
    <section id="skills" className="section">
      <SectionHeading prefix="#" title="Skills.json" />
      <p className="section-hint">Drag the chips to explore the skills universe</p>

      <motion.div
        className="skills__universe"
        ref={constraintsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="skills__center" aria-hidden>
          {'{ }'}
        </span>

        {skills.map((skill, i) => (
          <motion.button
            key={skill.name}
            type="button"
            className={`skill-chip accent-border-${skill.color}`}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.18}
            dragMomentum={false}
            whileDrag={{ scale: 1.12, zIndex: 5 }}
            whileHover={{ scale: 1.08, y: -4 }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * i, type: 'spring', stiffness: 220, damping: 18 }}
          >
            <span className={`skill-chip__dot accent-bg-${skill.color}`} />
            {skill.name}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}