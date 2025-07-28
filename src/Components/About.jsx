import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Users, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)] text-[var(--text)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-4">About Me</h2>
          <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
            I'm a passionate developer dedicated to crafting creative and high-performing web experiences. With a blend of curiosity and innovation, I build solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Sparkles className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Creative Vision</h3>
                <p className="text-[var(--text-light)]">
                  I approach every project with a creative mindset, blending aesthetics with functionality to create beautiful, usable products.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lightbulb className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Problem Solver</h3>
                <p className="text-[var(--text-light)]">
                  From debugging intricate issues to optimizing performance, I love solving challenges with elegant and effective code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Team Collaborator</h3>
                <p className="text-[var(--text-light)]">
                  Whether in a team or solo, I believe in strong communication, feedback loops, and growing together as developers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Rocket className="text-[var(--accent)] w-7 h-7" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Growth-Oriented</h3>
                <p className="text-[var(--text-light)]">
                  Technology evolves fast, and I stay on the cutting edge by learning continuously, building side projects, and exploring new tech stacks.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-[var(--accent)]"
          >
            <img
              src="/src/assets/About.jpg"
              alt="About Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
