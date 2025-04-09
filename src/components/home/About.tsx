'use client';

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl font-bold mb-6">
        Hi, I&apos;m Stramosk
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        I create interactive mathematical visualizations and developer tools.
        Exploring the intersection of code, mathematics, and visual design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Mathematics', 'Development', 'Visualization'].map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.2 }}
            className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-lg font-semibold mb-2">{skill}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {skill === 'Mathematics' && 'Complex systems & visual math'}
              {skill === 'Development' && 'Interactive web applications'}
              {skill === 'Visualization' && '3D graphics & data viz'}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}; 
