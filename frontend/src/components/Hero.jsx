import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = ({ setActiveCategory }) => {
  const categories = [
    { id: 1, name: 'Competitive', icon: '🏆', angle: 0 },
    { id: 2, name: 'Database', icon: '🗄️', angle: 72 },
    { id: 3, name: 'Frontend', icon: '🎨', angle: 144 },
    { id: 4, name: 'Full Stack', icon: '⚙️', angle: 216 },
    { id: 5, name: 'Programming', icon: '💻', angle: 288 },
  ];

  const radius = 200; // Radius of the orbit in pixels

  return (
    <section id="home" className="hero-section">
      <div className="orbital-container">
        {/* Rotating rings */}
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>

        {/* Center Avatar */}
        <div className="center-avatar-container">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&style=circle&top=shortHair&facialHair=beardLight" alt="Sabbi Rahul Revanth" className="center-avatar" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Rahul+Revanth&background=4361ee&color=fff&size=200'; }} />
          <div className="avatar-glow"></div>
        </div>

        {/* Orbital Nodes */}
        {categories.map((cat) => {
          // Calculate X and Y based on angle and radius
          // Angle 0 is at 3 o'clock. We subtract 90 to start at 12 o'clock.
          const radian = (cat.angle - 90) * (Math.PI / 180);
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <a 
              key={cat.id}
              href="#projects" 
              className="orbit-node"
              onClick={() => setActiveCategory(cat.name)}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              <div className="orbit-node-content glass">
                <span className="node-icon">{cat.icon}</span>
                <span className="node-name">{cat.name}</span>
              </div>
            </a>
          );
        })}
      </div>
      
      {/* Intro Text */}
      <div className="hero-text-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{portfolioData.hero.name}</span>
        </h1>
        <p className="hero-desc">
          {portfolioData.hero.subtitle}
          <br />
          {portfolioData.hero.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
