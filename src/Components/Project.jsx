import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const ProjectCard = ({ title, description, link, image, githubLink, tags = [] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="min-w-[280px] sm:min-w-[320px] bg-[var(--foreground)] 
    rounded-2xl p-4 select-none border border-white/10 hover:border-white/20 transition-all duration-300
    group touch-pan-x"
  >
    <div className="relative overflow-hidden rounded-xl mb-3">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
    </div>

    <h3 className="text-[var(--accent)] font-black mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{title}</h3>
    <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">{description}</p>

    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <Tooltip key={i} className="text-gray-600 font-bold]" content={`Built with ${tag}`} placement="top">
            <span className="text-xs px-2 py-1 bg-[var(--bg)] text-[--bg] rounded-full border border-white/10 backdrop-blur-sm cursor-help">
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
        className="flex-1 inline-flex items-center shadow-2xl justify-center gap-1.5 text-sm font-medium
        bg-blend-saturation border-1 hover:px-3 py-2 rounded-lg transition-colors duration-300"
      >
        <ExternalLink className="w-4 h-4 text-blue-950 font-black" />
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
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "Responsive React portfolio with email-enabled contact form using EmailJS, smooth UI, and real-time validation.",
      link: "https://namaste-code.vercel.app",
      image: "/assets/default-project.jpg",
      githubLink: "https://github.com/Sauravkumardotcom/Namaste_Code",
      tags: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with user authentication and payment integration.",
      link: "https://example.com/ecommerce",
      image: "/assets/default-project.jpg",
      githubLink: "https://github.com/username/ecommerce",
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API.",
      link: "https://example.com/weather",
      image: "/assets/default-project.jpg",
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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
