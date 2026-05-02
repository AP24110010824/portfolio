import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="glass" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>{edu.institution}</h3>
                <p style={{ fontWeight: 600 }}>{edu.degree}</p>
                <p style={{ color: 'var(--text-muted)' }}>{edu.score}</p>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{edu.year}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;
