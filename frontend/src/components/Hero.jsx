import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Award, Code, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { hero } = portfolioData;

  const orbitIcons = [
    { Icon: Code, color: 'var(--accent-color)', delay: 0 },
    { Icon: Database, color: 'var(--accent-secondary)', delay: 2 },
    { Icon: Award, color: '#f59e0b', delay: 4 },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-badge"
          >
            Available for Internships
          </motion.span>
          <h1 className="hero-title">
            {hero.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-accent' : ''}>{word} </span>
            ))}
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href={hero.github} target="_blank" rel="noopener noreferrer"><Github size={22} /></a>
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={22} /></a>
            <a href={`mailto:${hero.email}`}><Mail size={22} /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-visual"
        >
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-ring"></div>
            <div className="avatar-image">
               {/* Using a premium placeholder icon since I don't have the user's photo */}
               <Code size={60} color="var(--accent-color)" />
            </div>
            
            {orbitIcons.map((item, i) => (
              <motion.div
                key={i}
                className="orbiting-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: item.delay }}
              >
                <div className="icon-inner" style={{ background: item.color }}>
                  <item.Icon size={20} color="#fff" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
