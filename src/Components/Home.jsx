import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen mt-30 bg-[var(--bg)] text-[var(--text)] px-6 py-10 font-sans transition-colors duration-500">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--bg-secondary)]/80 px-6 py-12 shadow-2xl shadow-[rgba(245,158,11,0.12)] backdrop-blur-xl md:px-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.20),_transparent_25%)] pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_right_center,_rgba(59,130,246,0.14),_transparent_40%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--bg)]/90 px-4 py-2 text-sm font-semibold text-[var(--accent)] shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              BCA Graduate (2025) · Building production-ready full-stack products since graduation
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              I deliver impactful full-stack solutions with Java, Spring Boot, React, and modern cloud deployment workflows.
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-lg sm:text-xl text-[var(--text)]/75"
            >
              Since graduating with a BCA in 2025, I have built full-stack applications, enterprise-style dashboards, and AI-assisted tools that solve real user problems. I am not 5 years experienced, but I bring strong technical fundamentals and project-driven delivery since graduation.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid gap-4 sm:grid-cols-[auto_auto_auto]"
            >
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Education</p>
                <p className="mt-3 text-3xl font-semibold">BCA</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Dr. Bhimrao Ambedkar University, Agra</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Project Experience</p>
                <p className="mt-3 text-3xl font-semibold">Multiple Apps</p>
                <p className="mt-2 text-sm text-[var(--muted)]">React, Spring Boot, Node, MySQL, AI</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Focus</p>
                <p className="mt-3 text-3xl font-semibold">Product Quality</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Scalable systems, clean UX, deployable delivery</p>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)] px-6 py-3 text-[var(--accent)] shadow-lg transition hover:bg-[var(--accent)] hover:text-white"
              >
                Explore featured work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-white shadow-lg transition hover:bg-[var(--accentHover)]"
              >
                Let’s connect
              </Link>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[rgba(245,158,11,0.15)] via-transparent to-[rgba(59,130,246,0.08)] p-6 shadow-[0_0_60px_rgba(245,158,11,0.12)]">
              <img
                src="/assets/Developer_illustration.webp"
                alt="Developer illustration"
                className="w-full max-w-lg"
              />
              <div className="absolute -bottom-6 left-6 rounded-3xl bg-[var(--bg)]/95 px-5 py-4 shadow-2xl backdrop-blur-xl border border-white/10">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Career note</p>
                <p className="mt-2 text-lg font-semibold">Building strong full-stack systems since 2025 graduation.</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="mt-24 max-w-7xl mx-auto space-y-12">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {[
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Product-focused engineering",
              text: "I build systems that solve real problems and are easy to maintain by teams and users."
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Built since 2025",
              text: "Delivered multiple projects after graduating with BCA, including full-stack dashboards and AI tools."
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Full-stack fluency",
              text: "Java, Spring Boot, React, Node.js, MySQL, REST APIs, JWT auth, and cloud deployments."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-[var(--bg)] p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-[var(--text)]/75">{item.text}</p>
            </div>
          ))}
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-[var(--bg-secondary)]/80 p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Tech stack highlights</p>
              <h2 className="mt-4 text-3xl font-bold">The technologies I use to ship reliable products</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Java & Spring Boot",
                "React & Tailwind",
                "REST APIs & JWT",
                "MySQL & Prisma",
                "Node.js & Express",
                "Google Cloud & Vercel"
              ].map((tech) => (
                <span key={tech} className="rounded-2xl border border-white/10 bg-[var(--bg)]/95 px-4 py-3 text-sm font-medium text-[var(--text)] shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="mt-24 text-center">
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Featured projects
        </Motion.h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {[
            {
              name: "College Management System",
              summary: "Full-stack education platform with role-based dashboards for Admin, Faculty, Students, and Parents, attendance tracking, fee management, and communication workflows.",
              tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
              href: "https://github.com/Sauravkumardotcom/college-management-system"
            },
            {
              name: "Smart Task Manager Pro",
              summary: "Task management platform with priority scheduling, smart recommendations, calendar integration, and secure backend services built with Spring Boot and MySQL.",
              tags: ["React", "Spring Boot", "MySQL", "REST APIs"],
              href: "https://github.com/Sauravkumardotcom/smart-task-manager-pro"
            },
            {
              name: "SHIVI AI Assistant",
              summary: "Conversational AI assistant built with React and Spring Boot, integrating modern AI services to support smart prompts and user-specific workflows.",
              tags: ["React", "Spring Boot", "AI", "Google Cloud"],
              href: "https://github.com/Sauravkumardotcom/shivi-ai-assistant"
            },
            {
              name: "Event Management System",
              summary: "Event booking and management platform with dynamic listing, secure registration, and admin dashboards for organizers and attendees.",
              tags: ["React", "Node.js", "Express", "MySQL"],
              href: "https://github.com/Sauravkumardotcom/event-management-system"
            }
          ].map((project) => (
            <article key={project.name} className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.09)]">
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-[var(--text)]/80 mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-[var(--bg-secondary)]/80 px-3 py-1">{tag}</span>
                ))}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-[var(--accent)] hover:underline">
                View project
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
