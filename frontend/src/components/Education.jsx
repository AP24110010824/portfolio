import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const education = portfolioData?.education || [];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Academic Journey</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
            >
              <div style={{ 
                background: 'rgba(139, 92, 246, 0.1)', 
                padding: '1rem', 
                borderRadius: '1rem',
                color: 'var(--accent-color)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                <GraduationCap size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{edu.institution}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Calendar size={16} /> {edu.year}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 700 }}>
                    <Award size={18} color="var(--accent-color)" /> {edu.score}
                  </div>
                </div>

                {edu.details && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                    {edu.details.map((detail, i) => (
                      <span key={i} className="tech-tag" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
