import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import HomePage from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  const location = useLocation();

  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

  // Refs to scroll into view
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  // Handle deep linking (like /projects) and scroll to section
  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case '/about':
        setActiveSection('about');
        scrollToAbout();
        break;
      case '/skills':
        setActiveSection('skills');
        scrollToSkills();
        break;
      case '/projects':
        setActiveSection('projects');
        scrollToProjects();
        break;
      case '/contact':
        setActiveSection('contact');
        scrollToContact();
        break;
      default:
        setActiveSection('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Header
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onViewProjectClick={scrollToProjects} />}
          />
          <Route path="/about" element={<div ref={aboutRef}><About /></div>} />
          <Route path="/skills" element={<div ref={skillsRef}><Skills /></div>} />
          <Route path="/projects" element={<div ref={projectRef}><Project /></div>} />
          <Route path="/contact" element={<div ref={contactRef}><Contact /></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
