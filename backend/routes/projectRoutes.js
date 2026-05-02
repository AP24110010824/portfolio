const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Secret key for admin actions (Change this!)
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'rahul_admin_2026';

const initialProjects = [
  {
    title: 'VillageConnect',
    description: 'A MERN stack civic platform with 7+ active users. Aggregates live govt. job, agriculture & welfare schemes via official Govt. of India APIs.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    demoLink: '#',
    sourceLink: 'https://github.com/AP24110010824/VillageConnect'
  },
  {
    title: 'Expense Tracker Pro',
    description: 'Real-time budget tracking with animated utilization alerts, category-wise analytics, and custom hooks for zero data loss.',
    techStack: ['React.js', 'CSS Variables', 'LocalStorage'],
    category: 'Frontend',
    demoLink: '#',
    sourceLink: 'https://github.com/AP24110010824/expense-tracker'
  },
  {
    title: 'Hotel Management System',
    description: 'A comprehensive DBMS project for managing hotel operations, including room bookings and guest records using SQL.',
    techStack: ['SQL', 'DBMS', 'MySQL'],
    category: 'Database',
    demoLink: '#',
    sourceLink: 'https://github.com/AP24110010824/Hotel-Management-System'
  },
  {
    title: 'Diabetics Analysis System',
    description: 'Machine learning-based system to analyze and predict diabetes risk using patient health data and predictive models.',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    category: 'Python',
    demoLink: '#',
    sourceLink: 'https://github.com/AP24110010824/Diabetics-Analysis-System'
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive visualization of KMP Pattern Scanning and Longest Common Subsequence algorithms.',
    techStack: ['C++', 'JavaScript', 'Algorithms'],
    category: 'DSA',
    demoLink: '#',
    sourceLink: 'https://github.com/AP24110010824/Algorithm-Visualizer'
  }
];

// 1. Get all projects
router.get('/', async (req, res) => {
  try {
    if (require('mongoose').connection.readyState !== 1) {
      return res.json(initialProjects.map((p, i) => ({ ...p, _id: `p${i}` })));
    }
    
    const projects = await Project.find({});
    if (projects.length === 0) {
      return res.json(initialProjects.map((p, i) => ({ ...p, _id: `p${i}` })));
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 2. Add a new project (Admin)
router.post('/', async (req, res) => {
  const { secret, project } = req.body;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const newProject = new Project(project);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error adding project' });
  }
});

// 3. Update a project (Admin)
router.put('/:id', async (req, res) => {
  const { secret, project } = req.body;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, project, { new: true });
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project' });
  }
});

// 4. Delete a project (Admin)
router.delete('/:id', async (req, res) => {
  const { secret } = req.query;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ message: 'Unauthorized' });

  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting project' });
  }
});

module.exports = router;
