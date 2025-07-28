import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/Server/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Whether you have a question, want to collaborate, or just want to say hi,
          my inbox is always open. I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border border-[var(--accent)] hover:shadow-[0_0_15px_var(--accent)] transition shadow-2xl hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
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
            className="border border-[var(--accent)] shadow-2xl hover:shadow-[0_0_15px_var(--accent)] transition hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
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
            className="border border-[var(--accent)] hover:shadow-[0_0_15px_var(--accent)] transition shadow-2xl hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
          >
            <MapPin className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-70">Noida, India - 201301</p>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 max-w-3xl mx-auto p-8 rounded-xl shadow-2xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6  border shadow-xl border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] px-6 py-3 rounded-xl"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full py-3 hover:shadow-[0_0_15px_var(--accent)]  rounded-lg transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {successMessage && (
            <p className="mt-4 text-center text-[var(--accent)]">
              {successMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;