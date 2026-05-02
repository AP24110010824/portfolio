import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Achievements</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            {portfolioData.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Certifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{cert.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cert.issuer} • {cert.year}</p>
                </div>
                {cert.link && cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    View Proof
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
