import { motion } from "framer-motion";

export default function AllProjects({ projects }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          All Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300/20 dark:border-gray-700/40
                         rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, idt) => (
                  <span
                    key={idt}
                    className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-300/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="block mt-4 text-sm text-indigo-500 hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
