import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles, Layers, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen mt-30 bg-[var(--bg)] text-[var(--text)] px-6 py-10 font-sans transition-colors duration-500">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--bg-secondary)]/80 px-6 py-12 shadow-2xl shadow-[rgba(245,158,11,0.12)] backdrop-blur-xl md:px-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.25),_transparent_35%)] pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_right_center,_rgba(96,165,250,0.15),_transparent_40%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--bg)]/90 px-4 py-2 text-sm font-semibold text-[var(--accent)] shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Senior Software Engineer building high-impact products
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              I turn complex ideas into elegant, scalable web products with React, Node.js, and modern cloud workflows.
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-lg sm:text-xl text-[var(--text)]/75"
            >
              From product strategy to execution, I build polished frontend interfaces, resilient backend APIs, and automated deployment pipelines for startups and teams that demand quality at scale.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid gap-4 sm:grid-cols-[auto_auto_auto]"
            >
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 text-left shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Experience</p>
                <p className="mt-3 text-3xl font-semibold">5+ yrs</p>
                <p className="mt-2 text-sm text-[var(--muted)]">building end-to-end software products</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 text-left shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Impact</p>
                <p className="mt-3 text-3xl font-semibold">100k+</p>
                <p className="mt-2 text-sm text-[var(--muted)]">users reached via production applications</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[var(--bg)]/90 p-5 text-left shadow-xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Built for</p>
                <p className="mt-3 text-3xl font-semibold">SaaS & digital products</p>
                <p className="mt-2 text-sm text-[var(--muted)]">React, Node, TypeScript, deployment automation</p>
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
                Let’s build together
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
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Ready to ship</p>
                <p className="mt-2 text-lg font-semibold">High-performance SaaS products, MVPs, and portfolio-grade apps.</p>
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
              icon: <Layers className="h-6 w-6" />,
              title: "Product-thinking engineering",
              text: "I design systems that solve real user needs while staying maintainable and scalable."
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Modern full-stack delivery",
              text: "Frontend, backend and cloud deployment aligned with fast iteration cycles."
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Developer-first collaboration",
              text: "Clear communication, clean code, and documentation for every release."
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
              <h2 className="mt-4 text-3xl font-bold">The tools I rely on for scalable products</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "React & TypeScript",
                "Node.js & Express",
                "Tailwind CSS",
                "PostgreSQL / Prisma",
                "Cloud Deployments",
                "API automation"
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
              name: "Movies Space",
              summary: "Full-stack media platform combining video, audio, and social features with React, TypeScript, Express, Prisma, PostgreSQL, and Redis.",
              tags: ["React", "TypeScript", "Express", "Prisma"],
              href: "https://movies-space-brown.vercel.app/"
            },
            {
              name: "Shakya Labs",
              summary: "Brand website with email capture, bilingual support, and a responsive interface for service-first messaging.",
              tags: ["React", "Tailwind", "Nodemailer", "Vite"],
              href: "https://shakya-labs.vercel.app/"
            },
            {
              name: "Namaste Code Currency",
              summary: "Real-time foreign exchange tool that surfaces live rate data with clean UX and mobile-first responsiveness.",
              tags: ["React", "Tailwind", "API integration", "Responsive UI"],
              href: "https://namaste-code-currency.vercel.app"
            },
            {
              name: "Portfolio Website",
              summary: "This production portfolio is built with React, Tailwind, and Vite, showcasing my work, skills, and professional story.",
              tags: ["React", "Tailwind", "Vite", "UX"],
              href: "https://github.com/Sauravkumardotcom/Namaste_Code"
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
                View live
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-[var(--bg-secondary)]/80 p-10 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-8 shadow-xl">
            <h2 className="text-3xl font-bold">Let’s build a product that stands out.</h2>
            <p className="mt-4 text-[var(--text)]/75">
              If you need a lead engineer who can ship high-quality frontend and backend systems, automate deployments, and bring a strong product mindset to your team, let’s connect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Work style</p>
              <p className="mt-4 text-lg font-semibold">Reliable delivery, clear communication, iterative progress.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Why me</p>
              <p className="mt-4 text-lg font-semibold">A product-first engineer with strong front-end skills and real backend experience.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
