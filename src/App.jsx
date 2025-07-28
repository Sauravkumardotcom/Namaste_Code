import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import HomePage from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';


function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

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

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomePage />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Project />;
      default:
        return <Contact />;
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;
