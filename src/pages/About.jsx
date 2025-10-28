import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 px-6 sm:px-12 md:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center sm:text-left"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
            About Me
          </span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
          I’m <span className="font-semibold text-primary">Sanjana Satheesh</span>, a passionate software engineer 
          focused on building intelligent, data-driven systems and seamless backend integrations.
          My experience spans <span className="text-accent-purple">Python, Java, C++, and REST APIs</span>, with a
          growing interest in <span className="text-accent-teal">AI/ML systems</span> and 
          <span className="text-accent-pink"> data engineering pipelines</span>.
        </p>

        {/* Story */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
          After a year-long apprenticeship as a <span className="font-semibold">Data Engineering Apprentice at Fidelity Investments</span>,
          I’ve developed strong technical and collaborative skills — from automating database operations and migrating CI/CD pipelines 
          to building Power BI dashboards connected with Snowflake and Azure.
        </p>

        {/* Vision */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I’m now focused on advancing toward <span className="font-semibold text-primary">AI & Data Integration Engineering</span> —
          where backend systems meet modern machine learning workflows.
          I’m particularly interested in <span className="text-accent-purple">LLM integration, RAG pipelines,</span> and
          <span className="text-accent-teal"> scalable microservices</span> that make data truly intelligent.
        </p>

        {/* Tech Tag Cloud */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center sm:justify-start">
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
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700 hover:scale-105 transition-transform duration-200 bg-gray-50 dark:bg-gray-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
