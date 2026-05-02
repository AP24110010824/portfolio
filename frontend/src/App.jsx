import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const MainPortfolio = () => (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Sabbi Rahul Revanth. Built with React & Framer Motion.</p>
        </div>
      </footer>
    </>
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
