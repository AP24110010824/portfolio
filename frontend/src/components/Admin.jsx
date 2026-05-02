import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit, Save, X, Key, Layout } from 'lucide-react';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [secret, setSecret] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    category: 'Frontend',
    demoLink: '',
    sourceLink: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/projects');
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAuthorize = () => {
    if (secret === 'rahul_admin_2026') {
      setIsAuthorized(true);
    } else {
      alert('Invalid Secret Key');
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(', '),
      category: project.category,
      demoLink: project.demoLink,
      sourceLink: project.sourceLink
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}?secret=${secret}`);
      fetchProjects();
    } catch (error) {
      alert('Error deleting project');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim())
    };

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/projects/${editingId}`, { secret, project: payload });
      } else {
        await axios.post('http://localhost:5000/api/projects', { secret, project: payload });
      }
      setEditingId(null);
      setFormData({ title: '', description: '', techStack: '', category: 'Frontend', demoLink: '', sourceLink: '' });
      fetchProjects();
      alert('Success!');
    } catch (error) {
      alert('Error saving project');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="admin-login">
        <div className="glass login-card">
          <Key size={40} color="var(--accent-color)" />
          <h2>Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter Secret Key" 
            value={secret} 
            onChange={(e) => setSecret(e.target.value)} 
            className="input"
          />
          <button onClick={handleAuthorize} className="btn">Authorize</button>
          <a href="/" style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Back to Portfolio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard container">
      <div className="admin-header">
        <h1>Project Manager</h1>
        <button className="btn btn-outline" onClick={() => { setIsAuthorized(false); setSecret(''); }}>Logout</button>
      </div>

      <div className="admin-grid">
        <div className="form-section glass">
          <h3>{editingId ? 'Edit Project' : 'Add New Project'}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Project Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required className="input" />
            <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required className="input" rows="4"></textarea>
            <input type="text" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={e => setFormData({...formData, techStack: e.target.value})} required className="input" />
            <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="input">
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Database">Database</option>
              <option value="Python">Python</option>
              <option value="DSA">DSA</option>
            </select>
            <input type="text" placeholder="Demo Link (# if none)" value={formData.demoLink} onChange={e => setFormData({...formData, demoLink: e.target.value})} required className="input" />
            <input type="text" placeholder="Source Code Link (# if none)" value={formData.sourceLink} onChange={e => setFormData({...formData, sourceLink: e.target.value})} required className="input" />
            
            <div className="form-btns">
              <button type="submit" className="btn"><Save size={18} /> {editingId ? 'Update' : 'Add Project'}</button>
              {editingId && <button type="button" onClick={() => setEditingId(null)} className="btn btn-outline"><X size={18} /> Cancel</button>}
            </div>
          </form>
        </div>

        <div className="list-section">
          <h3>Current Projects ({projects.length})</h3>
          <div className="admin-project-list">
            {projects.map(p => (
              <div key={p._id} className="admin-project-item glass">
                <div className="p-info">
                  <h4>{p.title}</h4>
                  <span className="badge">{p.category}</span>
                </div>
                <div className="p-actions">
                  <button onClick={() => handleEdit(p)} className="icon-btn edit"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(p._id)} className="icon-btn delete"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
