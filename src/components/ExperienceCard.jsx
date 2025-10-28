import { motion } from "framer-motion";

export default function ExperienceCard({ company, role, period, description, technologies }) {
  return (
    <motion.div
      className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300/30 dark:border-gray-700/40 
                 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{role}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{period}</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-300/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
