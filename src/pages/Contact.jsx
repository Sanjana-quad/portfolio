import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! (EmailJS integration can go here.)");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10"
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.email}
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
            value={formData.message}
            required
            className="p-3 w-full rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* --- Social Links --- */}
        <div className="flex justify-center gap-6 mt-10 text-gray-600 dark:text-gray-300">
          <a href="mailto:sanjanasatheesh.ss@gmail.com"
            onClick={(e) => {
              window.location.href = "mailto:" + ["sanjanasatheesh.ss", "gmail.com"].join("@");
              e.preventDefault();
            }}
            className="hover:text-indigo-500">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sanjana-satheesh-236233189/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Sanjana-quad" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
