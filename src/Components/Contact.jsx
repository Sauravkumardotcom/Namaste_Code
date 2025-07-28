import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-6 py-20 font-sans transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accentHover)]"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-12"
        >
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border border-[var(--accent)] shadow-2xl hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
          >
            <Mail className="w-8 h-8  mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="opacity-70">Souravshakya951@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border border-[var(--accent)] shadow-2xl hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
          >
            <Phone className="w-8 h-8  mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="opacity-70">+91 897415811</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="border border-[var(--accent)] shadow-2xl hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
          >
            <MapPin className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-70">Noida, India - 201301</p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 max-w-3xl mx-auto p-8 rounded-xl shadow-2xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6  border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition text-[var(--accent)] px-6 py-3 rounded-xl"
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;