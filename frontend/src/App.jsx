import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import DynamicSection from './components/DynamicSection';
import Contact from './components/Contact';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <>
      <Navbar />
      <main>
        <Hero setActiveCategory={setActiveCategory} />
        <About />
        <Education />
        <Skills />
        <Achievements />
        <Projects activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <DynamicSection />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. Built with MERN.</p>
      </footer>
    </>
  );
}

export default App;
