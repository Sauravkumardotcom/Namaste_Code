import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage({onViewProjectClick}) {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-6 py-10 font-sans transition-colors duration-500">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-[var(--accent)]">Saurav Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-[var(--text)]/70 max-w-xl"
          >
            A passionate <strong className="text-[var(--text)]">Full Stack Developer</strong> crafting seamless user experiences and scalable backend solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              to='/projects'
              className="border shadow-2xl border-[var(--accent)] hover:shadow-[0_0_15px_var(--accent)]  hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-full"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border shadow-2xl border-[var(--accent)] hover:bg-[var(--accent)] hover:shadow-[0_0_15px_var(--accent)]  hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-full"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex gap-5"
          >
            <a href="https://github.com/Sauravkumardotcom/" target="_blank" className="rounded-xl hover:shadow-[0_0_15px_var(--accent)] transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sauravkumardotcom/" target="_blank" className="rounded-xl hover:shadow-[0_0_15px_var(--accent)] transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:Souravshakya951@gmail.com" className="rounded-xl hover:shadow-[0_0_15px_var(--accent)] transition">
              <Mail size={28} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/assets/Developer_illustration.webp"
            alt="Developer illustration"
            className="w-full max-w-md animate-fade-in"
          />
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Tech Stack
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
         <img src="/assets/React.webp" alt="React" className="h-12 shadow-2xl " />
          <img src="/assets/Node_js.webp" alt="Node.js" className="h-12 rounded-2xl shadow-2xl mix-blend-hard-light" />
          <img src="/assets/Express_js.png" alt="Express" className="h-12 shadow-2xl" />
          <img src="/assets/SQL.webp" alt="SQL" className="h-12  rounded-2xl shadow-2xl" />
          <img src="/assets/Tailwind.webp" alt="Tailwind" className="h-12 shadow-2xl rounded-2xl" />
          <img src="/assets/GenAi.png" alt="Gen Ai" className="h-12 shadow-2xl rounded-2xl" />
        </motion.div>
      </section>
         {/* Major Projects Section */}
      <section className="mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl shadow-lg bg-[var(--bg)] text-[var(--text)] text-left hover:shadow-[0_0_15px_var(--accent)] transition">
            <h3 className="text-xl font-semibold mb-2">Namaste Code Currency</h3>
            <p className="opacity-70">A responsive web app to track and check real-time currency exchange rates. Built with React and Tailwind CSS, it includes live API integration, smooth animations, and a clean, modern UI — ideal for demonstrating frontend development and dynamic data handling skills.

</p>
            <a
              href="https://namaste-code-currency.vercel.app"
              className="mt-4 inline-block text-[var(--accent)] hover:underline font-medium"
            >
              Visit Project
            </a>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-[var(--bg)] text-[var(--text)] text-left hover:shadow-[0_0_15px_var(--accent)] transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time Weather App</h3>
            <p className="opacity-70">A responsive React app that displays real-time weather using OpenWeatherMap API. Features include location-based search, weather visuals, and a clean Tailwind CSS UI — perfect for showcasing API and frontend skills.</p>
            <a
              href="#projects"
              className="mt-4 inline-block text-[var(--accent)] hover:underline font-medium"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl shadow-lg bg-[var(--bg)] text-[var(--text)] text-left hover:shadow-[0_0_15px_var(--accent)] transition">
            <p className="opacity-70">“Saurav delivered a top-tier product on time and exceeded all expectations. Highly recommended!”</p>
            <h4 className="mt-4 text-[var(--accent)] font-semibold">— Hiring Manager, Tech Corp</h4>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-[var(--bg)] text-[var(--text)] text-left hover:shadow-[0_0_15px_var(--accent)] transition ">
            <p className="opacity-70">“Incredible eye for design and detail, and his backend logic is top-notch. A rare talent.”</p>
            <h4 className="mt-4 text-[var(--accent)] font-semibold">— CTO, StartX</h4>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-3  gap-6 max-w-6xl mx-auto">
          <div className="p-5 rounded-xl shadow-2xl hover:shadow-[0_0_15px_var(--accent)] transition bg-[var(--bg)] text-[var(--text)]">
            <h3 className="text-xl font-semibold mb-2">10 Tips to Improve Your React Apps</h3>
            <p className="opacity-70">Best practices, performance hacks, and patterns to enhance your React projects.</p>
          </div>
          <div className="p-5 rounded-xl shadow-2xl hover:shadow-[0_0_15px_var(--accent)] transition bg-[var(--bg)] text-[var(--text)]">
            <h3 className="text-xl font-semibold mb-2">How I Build Full Stack Projects from Scratch</h3>
            <p className="opacity-70">A complete breakdown of my process from planning to deployment.</p>
          </div>
          <div className="p-5 rounded-xl shadow-2xl hover:shadow-[0_0_15px_var(--accent)] transition bg-[var(--bg)] text-[var(--text)]">
            <h3 className="text-xl font-semibold mb-2">Understanding REST vs GraphQL</h3>
            <p className="opacity-70">Key differences, when to use which, and real-world examples explained simply.</p>
          </div>
        </div>
      </section>

    
    </main>
  );
}
