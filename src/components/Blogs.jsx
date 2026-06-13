import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { blogs } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Blogs() {
  const hasBlogs = blogs && blogs.length > 0;

  return (
    <section id="blogs" className="section">
      <SectionHeading command="Blogs" />

      {!hasBlogs ? (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="empty-state__line">
            <span className="prompt">$</span> cat ~/blogs/*.md
          </p>
          <p className="empty-state__msg">
            No posts published yet. Add entries to the <code>blogs</code> array in{' '}
            <code>src/data/portfolio.js</code> to populate this section.
          </p>
        </motion.div>
      ) : (
        <div className="blog-list">
          {blogs.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="blog-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="blog-card__head">
                <h3 className="blog-card__title">{post.title}</h3>
                <FiExternalLink className="blog-card__ext" />
              </div>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__foot">
                <span className="blog-card__date">{post.date}</span>
                <div className="tag-row">
                  {(post.tags || []).map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}