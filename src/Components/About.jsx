import { motion as Motion } from 'framer-motion';
import { Sparkles, Lightbulb, Users, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)] text-[var(--text)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-4">About Me</h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            I am a BCA graduate from Dr. Bhimrao Ambedkar University, Agra. Since 2025, I have built full-stack web applications with Java, Spring Boot, React, Node.js, and cloud deployment. I’m not a 5-year industry veteran, but I’ve already delivered multiple production-ready projects and continue to learn quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Sparkles className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Career Summary</h3>
                <p className="text-[var(--muted)]">
                  Full-stack developer building high-quality applications since my 2025 graduation, focused on scalable architecture, clean UX, and performance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lightbulb className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Strong Foundations</h3>
                <p className="text-[var(--muted)]">
                  Java, Spring Boot, React.js, REST APIs, MySQL, JWT authentication, and cloud deployment are the foundations of my work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Product Mindset</h3>
                <p className="text-[var(--muted)]">
                  I deliver product-ready software by focusing on requirements, maintainability, and measurable outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Rocket className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Continuous Growth</h3>
                <p className="text-[var(--muted)]">
                  I stay current by building projects, learning new tools, and applying best practices across frontend, backend, and deployment.
                </p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-[var(--accent)]"
          >
            <img
              src="/assets/About.jpg"
              alt="About Illustration"
              className="w-full h-full object-cover"
            />
          </Motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Education</p>
            <h3 className="mt-5 text-2xl font-semibold">BCA Graduate</h3>
            <p className="mt-3 text-[var(--muted)]">Dr. Bhimrao Ambedkar University, Agra • 2022–2025</p>
            <p className="mt-3 text-[var(--muted)]">CGPA / Percentage: 70.3%</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Experience</p>
            <h3 className="mt-5 text-2xl font-semibold">Project-based delivery</h3>
            <p className="mt-3 text-[var(--muted)]">Built college management, task manager, AI assistant, event management, and portfolio applications.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[var(--bg)] p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Strengths</p>
            <h3 className="mt-5 text-2xl font-semibold">Full-stack execution</h3>
            <p className="mt-3 text-[var(--muted)]">Strong in Java, Spring Boot, React, backend APIs, database modeling, and deployment automation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
