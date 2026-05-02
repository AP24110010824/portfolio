import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code, Layout, Database, Terminal, Cpu, Settings } from 'lucide-react';
import './Skills.css';

const iconMap = {
  "Languages": Terminal,
  "Frontend": Layout,
  "Backend & DB": Database,
  "Tools & Core CS": Cpu
};

const Skills = () => {
  const skillCategories = portfolioData.skillCategories || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.title] || Code;
            return (
              <motion.div key={index} variants={item} className="skill-category glass">
                <div className="category-header">
                  <div className="category-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-dot"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
