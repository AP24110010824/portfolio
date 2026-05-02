import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass" 
          style={{ padding: '4rem 3rem', textAlign: 'center' }}
        >
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-main)', 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: '1.8',
            opacity: 0.9,
            fontWeight: 500
          }}>
            {portfolioData.about.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
