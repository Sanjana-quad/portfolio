// src/pages/ResumePage.jsx
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  // Store the PDF inside public/resume/
  const resumePath = "/resume/Sanjana_Resume.pdf";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex justify-center items-center gap-2">
          <FileText className="w-8 h-8 text-indigo-500" /> My Resume
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          A glimpse into my journey — experience, skills, and projects in one place.
        </p>

        {/* Resume Preview Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full max-w-6xl h-[85vh] bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Use Google Docs Viewer for consistent in-browser rendering */}
          <iframe
            src={`https://docs.google.com/gview?url=${window.location.origin}${resumePath}&embedded=true`}
            title="Resume Preview"
            width="100%"
            height="100%"
            className="border-none rounded-2xl"
          ></iframe>
        </motion.div>

        {/* Download Button */}
        <motion.a
          href={resumePath}
          download="Sanjana_Satheesh_Resume.pdf"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-1 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Download Resume (PDF)
        </motion.a>
      </motion.div>
    </section>
  );
}

