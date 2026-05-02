import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Database, Terminal, Cpu } from 'lucide-react';
import './Projects.css';

const categoryIcons = {
  'All': Layout,
  'Full Stack': Cpu,
  'Frontend': Code,
  'Database': Database,
  'Python': Terminal,
  'DSA': Terminal
};

const Projects = ({ activeCategory, setActiveCategory }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Full Stack', 'Frontend', 'Database', 'Python', 'DSA'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback mock data
        setProjects([
          {
            _id: 'p1',
            title: 'VillageConnect',
            description: 'A MERN stack civic platform with 7+ active users. Aggregates live govt. job, agriculture & welfare schemes via official Govt. of India APIs.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            category: 'Full Stack',
            demoLink: '#',
            sourceLink: 'https://github.com/sabbirahul/VillageConnect'
          },
          {
            _id: 'p2',
            title: 'Expense Tracker Pro',
            description: 'Real-time budget tracking with animated utilization alerts, category-wise analytics, and custom hooks for zero data loss.',
            techStack: ['React.js', 'CSS Variables', 'LocalStorage'],
            category: 'Frontend',
            demoLink: '#',
            sourceLink: 'https://github.com/sabbirahul/expense-tracker'
          },
          {
            _id: 'p3',
            title: 'Hotel Management System',
            description: 'A comprehensive DBMS project for managing hotel operations, including room bookings and guest records using SQL.',
            techStack: ['SQL', 'DBMS', 'MySQL'],
            category: 'Database',
            demoLink: '#',
            sourceLink: '#'
          },
          {
            _id: 'p4',
            title: 'Diabetics Analysis System',
            description: 'Machine learning-based system to analyze and predict diabetes risk using patient health data and predictive models.',
            techStack: ['Python', 'Pandas', 'Scikit-learn'],
            category: 'Python',
            demoLink: '#',
            sourceLink: '#'
          },
          {
            _id: 'p5',
            title: 'Algorithm Visualizer',
            description: 'Interactive visualization of KMP Pattern Scanning and Longest Common Subsequence algorithms.',
            techStack: ['C++', 'JavaScript', 'Algorithms'],
            category: 'DSA',
            demoLink: '#',
            sourceLink: '#'
          }
        ]);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="category-filter">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card glass"
                >
                  <div className="project-content">
                    <div className="project-type">
                      {project.category}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.techStack?.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Github size={16} /> Code
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                        <ExternalLink size={16} /> Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
