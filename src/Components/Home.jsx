import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen mt-30 bg-[var(--bg)] text-[var(--text)] px-6 py-10 font-sans transition-colors duration-500">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <Motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            I build production-ready web applications with React and Node.js.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-[var(--text)]/75 max-w-xl"
          >
            I deliver polished user experiences, API-first backend systems, and deployable full-stack products for modern web platforms.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)] px-6 py-3 text-[var(--accent)] shadow-lg transition hover:bg-[var(--accent)] hover:text-white"
            >
              View Featured Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--accent)] px-6 py-3 text-white shadow-lg transition hover:bg-[var(--accentHover)]"
            >
              Contact Me
            </Link>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <a href="https://github.com/Sauravkumardotcom/" target="_blank" rel="noreferrer" className="rounded-xl p-2 hover:bg-[var(--accent)] hover:text-white transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sauravkumardotcom/" target="_blank" rel="noreferrer" className="rounded-xl p-2 hover:bg-[var(--accent)] hover:text-white transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:Souravshakya951@gmail.com" className="rounded-xl p-2 hover:bg-[var(--accent)] hover:text-white transition">
              <Mail size={28} />
            </a>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/assets/Developer_illustration.webp"
            alt="Developer illustration"
            className="w-full max-w-md"
          />
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
          Core technologies I use every day
        </Motion.h2>
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <img src="/assets/React.webp" alt="React" className="h-12 shadow-2xl" />
          <img src="/assets/Node_js.webp" alt="Node.js" className="h-12 rounded-2xl shadow-2xl mix-blend-hard-light" />
          <img src="/assets/Express_js.png" alt="Express" className="h-12 shadow-2xl" />
          <img src="/assets/SQL.webp" alt="SQL" className="h-12 rounded-2xl shadow-2xl" />
          <img src="/assets/Tailwind.webp" alt="Tailwind" className="h-12 shadow-2xl rounded-2xl" />
          <img src="/assets/GenAi.png" alt="AI & automation" className="h-12 shadow-2xl rounded-2xl" />
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
          Selected projects
        </Motion.h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <article className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-lg transition hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Movies Space</h3>
            <p className="text-[var(--text)]/80 mb-4">
              Full-stack media platform combining video, audio, and social features with React, TypeScript, Express, Prisma, PostgreSQL, and Redis.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span>React</span>
              <span>TypeScript</span>
              <span>Express</span>
              <span>Prisma</span>
            </div>
            <a href="https://movies-space-brown.vercel.app/" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-[var(--accent)] hover:underline">
              Live demo
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-lg transition hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Shakya Labs</h3>
            <p className="text-[var(--text)]/80 mb-4">
              Brand website with email capture, bilingual support, and responsive interface designed to communicate services clearly.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span>React</span>
              <span>Tailwind</span>
              <span>Nodemailer</span>
              <span>Vite</span>
            </div>
            <a href="https://shakya-labs.vercel.app/" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-[var(--accent)] hover:underline">
              Live demo
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-lg transition hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Namaste Code Currency</h3>
            <p className="text-[var(--text)]/80 mb-4">
              Real-time foreign exchange tool that surfaces live rate data with clean UX and mobile-first interactivity.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span>React</span>
              <span>Tailwind</span>
              <span>API integration</span>
              <span>Responsive UI</span>
            </div>
            <a href="https://namaste-code-currency.vercel.app" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-[var(--accent)] hover:underline">
              Live demo
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[var(--bg)] p-6 shadow-lg transition hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-[var(--text)]/80 mb-4">
              The production portfolio is built with React, Tailwind CSS, and Vite, showcasing my work, skills, and contact path.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span>React</span>
              <span>Tailwind</span>
              <span>Vite</span>
              <span>UX</span>
            </div>
            <a href="https://github.com/Sauravkumardotcom/Namaste_Code" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-[var(--accent)] hover:underline">
              View source
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
