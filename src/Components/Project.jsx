import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const ProjectCard = ({ title, description, link, githubLink, tags = [] }) => (
  <Motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="min-w-[280px] sm:min-w-[320px] bg-[var(--foreground)] rounded-2xl p-4 select-none border border-white/10 hover:border-white/20 transition-all duration-300 group"
  >
    <div className="relative overflow-hidden rounded-xl mb-3 bg-gray-900/10 h-40 flex items-center justify-center">
      <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Project preview</span>
    </div>

    <h3 className="text-[var(--accent)] font-black mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{title}</h3>
    <p className="text-[var(--muted)] text-sm mb-4">{description}</p>

    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <Tooltip key={i} content={`Built with ${tag}`} placement="top">
            <span className="text-xs px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text)] rounded-full border border-white/10 cursor-help">
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
        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--accentHover)]"
      >
        <ExternalLink className="w-4 h-4" />
        View project
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gray-700/50 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        <Github className="w-4 h-4" />
        Repo
      </a>
    </div>
  </Motion.div>
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
      title: "College Management System",
      description: "A comprehensive full-stack system with role-based dashboards for Admin, Faculty, Students, and Parents, attendance tracking, fee management, results, and communication tools.",
      link: "https://github.com/Sauravkumardotcom/college-management-system",
      githubLink: "https://github.com/Sauravkumardotcom/college-management-system",
      tags: ["React", "Node.js", "Express", "MySQL", "JWT"]
    },
    {
      title: "Smart Task Manager Pro",
      description: "A productivity platform with smart task prioritization, calendar scheduling, push-style notifications, and secure backend APIs built with Spring Boot and MySQL.",
      link: "https://github.com/Sauravkumardotcom/smart-task-manager-pro",
      githubLink: "https://github.com/Sauravkumardotcom/smart-task-manager-pro",
      tags: ["React", "Spring Boot", "MySQL", "REST APIs"]
    },
    {
      title: "SHIVI AI Assistant",
      description: "A conversational assistant built on AI integrations with a React frontend and Spring Boot backend to power prompt-driven workflows and intelligent responses.",
      link: "https://github.com/Sauravkumardotcom/shivi-ai-assistant",
      githubLink: "https://github.com/Sauravkumardotcom/shivi-ai-assistant",
      tags: ["React", "Spring Boot", "AI", "Google Cloud"]
    },
    {
      title: "Event Management System",
      description: "An event booking platform featuring event listings, secure registration, booking management, and admin controls for organizers and attendees.",
      link: "https://github.com/Sauravkumardotcom/event-management-system",
      githubLink: "https://github.com/Sauravkumardotcom/event-management-system",
      tags: ["React", "Node.js", "Express", "MySQL"]
    }
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.tags.includes(activeFilter));
  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  return (
    <div className="relative bg-[var(--bg)] py-20 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent"
        >
          Projects & Case Studies
        </Motion.h2>
        <p className="mt-3 text-[var(--muted)] text-base sm:text-lg">
          Real full-stack work with measurable outcomes, scalable architecture, and polished UI.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10 px-4">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
              activeFilter === tag ? "bg-[var(--accent)] text-white" : "bg-white text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
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
