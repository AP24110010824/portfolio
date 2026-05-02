const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
  try {
    // Check if MongoDB is connected, else return mock data
    if (require('mongoose').connection.readyState !== 1) {
      return res.json([
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
    }
    
    const projects = await Project.find({});
    if (projects.length === 0) {
      return res.json([
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
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
