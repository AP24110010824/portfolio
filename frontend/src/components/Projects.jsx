import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = ({ activeCategory, setActiveCategory }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback mock data with categories if backend isn't running
        setProjects([
          {
            _id: '1',
            title: 'Real-Time Expense Tracker',
            description: 'Built a frontend expense tracking application using React.js with clean component-based architecture. Implemented state management for real-time updates and category-wise grouping.',
            techStack: ['React.js', 'JavaScript', 'CSS'],
            category: 'Frontend',
            demoLink: '#',
            sourceLink: '#'
          },
          {
            _id: '2',
            title: 'Diabetics Analysis System',
            description: 'Developed a machine learning-based system to analyze and predict diabetes risk using patient health data. Implemented data preprocessing and classification models.',
            techStack: ['Python', 'Machine Learning'],
            category: 'Programming',
            demoLink: '#',
            sourceLink: '#'
          },
          {
            _id: '3',
            title: 'KMP Algorithm Visualizer',
            description: 'Implemented Design and Analysis of KMP (PATTERN SCANNING) Algorithm concepts demonstrating algorithmic complexity.',
            techStack: ['C++'],
            category: 'Competitive',
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>My Projects</h2>
          {activeCategory !== 'All' && (
            <button 
              className="btn btn-outline" 
              onClick={() => setActiveCategory('All')}
              style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
            >
              Clear Filter: {activeCategory} ✕
            </button>
          )}
        </div>
        {loading ? (
          <div style={{ textAlign: 'center' }}>Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <div key={project._id} className="project-card glass">
                <div className="project-img-placeholder">
                  <span>{project.title} Preview</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.sourceLink} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Code</a>
                    <a href={project.demoLink} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Demo</a>
                  </div>
                </div>
              </div>
            )) : (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>
                <p>No projects found for category: {activeCategory}</p>
                <button onClick={() => setActiveCategory('All')} className="btn" style={{ marginTop: '1rem' }}>View All Projects</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
