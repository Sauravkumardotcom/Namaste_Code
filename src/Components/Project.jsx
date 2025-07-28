import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X, Maximize2, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const ProjectCard = ({ title, description, link, image, githubLink, onImageClick, tags = [] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="min-w-[280px] sm:min-w-[320px] bg-[var(--foreground)] 
    rounded-2xl p-4 select-none border border-white/10 hover:border-white/20 transition-all duration-300
    hover:shadow-[0_0_30px_rgba(88,88,255,0.15)] group touch-pan-x"
  >
    <div className="relative overflow-hidden rounded-xl mb-3">
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
        <button
          onClick={() => onImageClick(image)}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 
          transition-all duration-300 transform hover:scale-110"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-[var(--text)] text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{title}</h3>
    <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">{description}</p>

    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <Tooltip key={i} content={`Built with ${tag}`} placement="top">
            <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-sm cursor-help">
              {tag}
            </span>
          </Tooltip>
        ))}
      </div>
    )}

    <div className="flex gap-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-white 
        bg-[var(--accent)] hover:bg-[var(--accentHover)] px-3 py-2 rounded-lg transition-colors duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-white 
        bg-gray-700/50 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-300"
      >
        <Github className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const Project = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      link: "https://example.com/portfolio",
      image: "https://via.placeholder.com/300",
      githubLink: "https://github.com/username/portfolio",
      tags: ["React", "CSS", "JavaScript"]
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with user authentication and payment integration.",
      link: "https://example.com/ecommerce",
      image: "https://via.placeholder.com/300",
      githubLink: "https://github.com/username/ecommerce",
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API.",
      link: "https://example.com/weather",
      image: "https://via.placeholder.com/300",
      githubLink: "https://github.com/username/weather",
      tags: ["React", "API", "Bootstrap"]
    }
  ];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.tags.includes(activeFilter));
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  return (
    <div className="relative bg-[var(--backgroundStart)] to-[var(--backgroundEnd)] py-20 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent"
        >
          Projects & Case Studies
        </motion.h2>
        <p className="mt-3 text-[var(--muted)] text-base sm:text-lg">
          From elegant UIs to powerful backends—these projects showcase problem-solving, design thinking, and full-stack delivery.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 text-sm rounded-full border border-gray-400 dark:border-gray-700 transition-all duration-300 ${activeFilter === tag ? "bg-[var(--accent)] text-white" : "bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 px-6 sm:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} onImageClick={setLightboxImg} />
        ))}
      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full"
            >
              <button
                className="absolute -top-12 right-4 text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
                onClick={() => setLightboxImg(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightboxImg}
                alt="Project Screenshot"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
