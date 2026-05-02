import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Award, Star, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  "DevFusion 2.0 - IIT Bombay": Trophy,
  "LeetCode Specialist": Code,
  "JEE Mains 2024": Star,
  "MongoDB Certified": Award
};

const Achievements = () => {
  const achievements = portfolioData.achievements || [];

  return (
    <section id="achievements" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {achievements.map((item, index) => {
            const Icon = iconMap[item.title] || Award;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass"
                style={{ padding: '2.5rem' }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'rgba(139, 92, 246, 0.1)', 
                  borderRadius: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--accent-color)',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
