import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass">
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
