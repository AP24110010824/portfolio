import React from 'react';
import { portfolioData } from '../data/portfolioData';

const DynamicSection = () => {
  if (!portfolioData.customSections || portfolioData.customSections.length === 0) return null;

  return (
    <>
      {portfolioData.customSections.map((section, index) => (
        <section key={index} id={`custom-${index}`} className="section">
          <div className="container">
            <h2 className="section-title">{section.title}</h2>
            <div className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                {section.content}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DynamicSection;
