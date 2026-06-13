import { motion } from 'framer-motion';
import { experience } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading command="git log --stat --oneline" />

      <div className="gitlog">
        {experience.map((job, i) => (
          <motion.div
            className="commit"
            key={job.hash}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <div className="commit__rail">
              <span className="commit__node" />
              {i < experience.length && <span className="commit__line" />}
            </div>

            <div className="commit__body">
              <div className="commit__head">
                <span className="commit__hash">{job.hash}</span>
                {job.head && (
                  <span className="commit__ref">
                    HEAD <span className="arrow">-&gt;</span> developer
                  </span>
                )}
                <span className="commit__period">{job.period}</span>
              </div>

              <h3 className="commit__title">{job.title}</h3>
              <p className="commit__desc">{job.description}</p>

              <div className="tag-row">
                {job.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="commit__stat">
                <span>{job.files} files changed</span>
                <span className="stat-add">+{job.insertions} insertions</span>
                <span className="stat-del">-{job.deletions} deletions</span>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="commit commit--initial">
          <div className="commit__rail">
            <span className="commit__node commit__node--end" />
          </div>
          <div className="commit__body">
            <p className="commit__initial">Initial Commit (Hello World)</p>
          </div>
        </div>
      </div>
    </section>
  );
}