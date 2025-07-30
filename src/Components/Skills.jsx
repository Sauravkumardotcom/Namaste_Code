import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaTools, FaDownload, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiDjango, SiPostgresql } from "react-icons/si";
import { Link } from "react-router-dom";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, progress: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, progress: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, progress: 92 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, progress: 88 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, progress: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNode className="text-green-600" />, progress: 87 },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, progress: 83 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, progress: 80 },
    { name: "Django", icon: <SiDjango className="text-green-500" />, progress: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, progress: 78 },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, progress: 85 },
    { name: "Developer Tools", icon: <FaTools className="text-gray-600" />, progress: 78 },
    { name: "Python", icon: <FaPython className="text-blue-400" />, progress: 80 },
  ],
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20 },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Skills = () => {
  const [category, setCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-[var(--backgroundStart)] to-[var(--backgroundEnd)] text-[var(--text)] px-6 py-20 md:px-20 lg:px-36 transition-colors duration-500"
    >
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)]">
            Tech Stack
          </h2>
          <p className="text-lg max-w-xl mx-auto text-[var(--muted)]">
            A curated list of tools, technologies, and frameworks that power my web development journey.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(skillsData).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition duration-300 backdrop-blur-md shadow-sm text-sm md:text-base ${
                category === cat
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)] text-white"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 flex items-center space-x-2 rounded-full bg-[var(--accent)] text-red-400 hover:bg-[var(--accentHover)] text-sm md:text-base shadow-md"
          >
            <FaDownload  className="text-[var(--text)]"/> <span className="text-[var(--text)]">Hire Me</span>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {skillsData[category].map((skill) => (
              <motion.div
                key={skill.name}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="bg-[var(--foreground)] shadow-xl rounded-xl p-6 flex items-center gap-4  border border-[var(--muted)] hover:scale-[1.02] transition-transform duration-200"
                variants={itemVariants}
                title={`${skill.name} - ${skill.progress}% Proficiency`}
              >
                <div className="text-4xl">{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold text-[var(--text)]">{skill.name}</h4>
                    <span className="text-sm text-[var(--muted)]">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
