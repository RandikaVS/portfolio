import { motion } from 'framer-motion';

export default function SectionHeading({ prefix = '#', title, command }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {command ? (
        <h2 className="section-heading__cmd">
          <span className="prompt">$</span> {command}
        </h2>
      ) : (
        <h2 className="section-heading__title">
          <span className="section-heading__hash">{prefix}</span> {title}
        </h2>
      )}
      <span className="section-heading__rule" />
    </motion.div>
  );
}