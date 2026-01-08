import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("Thank you for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    alert("Failed to send message. Please try again later.");
  }
};



  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 via-purple-500/5 to-transparent blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Let’s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I’m always open to conversations, collaborations, and new opportunities.
            Let's connect!
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* --- Left Section: Info & Socials --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Get in Touch
              </h3>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  <a
                    href="mailto:sanjanasatheesh.ss@gmail.com" target = "_blank" rel="noopener noreferrer"
                    className="hover:text-indigo-500 transition"
                  >
                    sanjanasatheesh.ss@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  <p>Bangalore, India</p>
                </div>
              </div>

              <div className="mt-6 flex gap-6 text-gray-600 dark:text-gray-300">
                <a
                  href="https://github.com/Sanjana-quad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjana-satheesh-236233189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- Right Section: Contact Form --- */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/60 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
              Send a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
