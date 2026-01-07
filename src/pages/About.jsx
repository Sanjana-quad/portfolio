import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative min-h-screen flex flex-col items-center justify-center
        px-6 sm:px-12 md:px-24 py-20
        bg-gradient-to-br 
        from-orange-50 via-white to-yellow-100 
        dark:from-indigo-950 dark:via-purple-900 dark:to-blue-950
        text-gray-900 dark:text-gray-100
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center sm:text-left"
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-purple-400 dark:to-blue-400">
            💫 About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            Curious by nature, grounded in fundamentals, and driven by building things that last.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
          <p>
            I began my journey in embedded systems, focusing on how software controls and interacts with hardware.
          </p>

          <p>
            Over time, my path evolved - from managing databases and automating data pipelines, 
            to experimenting with AI models, RAG-based systems, and multilingual OCR pipelines in my personal projects.
          </p>
          </div>

        {/* Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center sm:text-left text-gray-800 dark:text-gray-200">
            My current focus is on:
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400 list-disc pl-6 sm:pl-10">
            <li>Designing scalable APIs and backend architectures.</li>
            <li>Building practical AI workflows using <span className="font-semibold text-orange-600 dark:text-teal-300">LangChain</span>, <span className="font-semibold text-orange-600 dark:text-teal-300">FastAPI</span>, and vector databases.</li>
            <li>Learning cloud-native AI deployment on <span className="font-semibold text-orange-600 dark:text-purple-300">Azure</span> and <span className="font-semibold text-orange-600 dark:text-purple-300">IBM Cloud</span>.</li>
          </ul>
        </motion.div>

        {/* Outro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-gray-700 dark:text-gray-400 italic text-center sm:text-left"
        >
          When I’m not coding, you’ll find me journaling my learning journey, exploring minimal designs, 
          or deep-diving into how technology transforms creativity and communication.
        </motion.p>

        {/* Tech Tag Cloud */}
        <div className="flex flex-wrap gap-3 mt-12 justify-center sm:justify-start">
          {[
            "Python",
            "Java",
            "C++",
            "FastAPI",
            "LangChain",
            "Power BI",
            "Docker",
            "SQL",
            "Snowflake",
            "Azure",
            "REST APIs",
            "Data Pipelines",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="
                px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700
                bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-md
                hover:scale-105 hover:border-orange-400 dark:hover:border-purple-400
                transition-all duration-300
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
