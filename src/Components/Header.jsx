import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Home, Info, Folder, Code, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ setActiveSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, section: 'home' },
    { name: 'About', icon: <Info size={18} />, section: 'about' },
    { name: 'Projects', icon: <Folder size={18} />, section: 'projects' },
    { name: 'Skills', icon: <Code size={18} />, section: 'skills' },
    { name: 'Contact', icon: <Mail size={18} />, section: 'contact' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[var(--bg)] text-[var(--text)] shadow-md backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className="text-2xl font-bold text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          MyPortfolio
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ name, section }) => (
            <motion.a
              key={name}
              onClick={() => setActiveSection(section)}
              className={`relative font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === section
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text)] hover:text-[var(--accent)]'
              }`}
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[var(--accent)] transition-all ${
                  activeSection === section ? 'w-full' : 'w-0'
                }`}
              ></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[var(--text)] hover:text-[var(--accent)] transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={28} className="text-[var(--text)]" />
              ) : (
                <Menu size={28} className="text-[var(--text)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-64 bg-[var(--bg)] text-[var(--text)] shadow-xl p-4 space-y-2 z-40 rounded-l-xl border-l border-[var(--accent)]"
          >
            {navLinks.map(({ name, icon, section }) => (
              <motion.a
                key={name}
                onClick={() => {
                  setActiveSection(section);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 font-semibold text-base rounded-md py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer ${
                  activeSection === section
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-secondary)] hover:bg-[var(--accent)] hover:text-white'
                }`}
              >
                {icon} {name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
