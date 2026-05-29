import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaTools, FaGitAlt, FaDownload, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiSpringboot, SiGooglecloud } from "react-icons/si";
import { Link } from "react-router-dom";

const skillsData = {
  Languages: [
    { name: "Java", icon: <FaJava className="text-orange-500" />, progress: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, progress: 88 },
    { name: "SQL", icon: <SiMysql className="text-blue-500" />, progress: 85 },
  ],
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-cyan-400" />, progress: 90 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, progress: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, progress: 92 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, progress: 88 },
  ],
  Backend: [
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, progress: 87 },
    { name: "Node.js", icon: <FaNode className="text-green-600" />, progress: 84 },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, progress: 82 },
    { name: "REST APIs", icon: <FaTools className="text-gray-500" />, progress: 89 },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, progress: 88 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, progress: 82 },
  ],
  Cloud: [
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" />, progress: 76 },
    { name: "Vercel", icon: <FaGitAlt className="text-gray-600" />, progress: 80 },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, progress: 86 },
    { name: "Postman", icon: <FaTools className="text-gray-600" />, progress: 82 },
    { name: "JWT Authentication", icon: <FaTools className="text-gray-600" />, progress: 80 },
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
  const [category, setCategory] = useState("Languages");

  return (
    <section id="skills" className="relative bg-gradient-to-br from-[var(--backgroundStart)] to-[var(--backgroundEnd)] text-[var(--text)] px-6 py-20 md:px-20 lg:px-36 transition-colors duration-500">
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)]">
            Core Skills & Technologies
          </h2>
          <p className="text-lg max-w-xl mx-auto text-[var(--muted)]">
            Organized by discipline so recruiters can quickly see the full-stack strengths behind the portfolio.
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
            className="px-6 py-2 flex items-center space-x-2 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accentHover)] text-sm md:text-base shadow-md"
          >
            <FaDownload className="text-[var(--text)]" /> <span>Connect</span>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={category}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {skillsData[category].map((skill) => (
              <Motion.div
                key={skill.name}
                className="bg-[var(--foreground)] shadow-xl rounded-xl p-6 flex items-center gap-4 border border-[var(--muted)] hover:scale-[1.02] transition-transform duration-200"
                variants={itemVariants}
                title={`${skill.name} - ${skill.progress}% proficiency`}
              >
                <div className="text-4xl">{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold text-[var(--text)]">{skill.name}</h4>
                    <span className="text-sm text-[var(--muted)]">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <Motion.div
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1 }}
                    ></Motion.div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
