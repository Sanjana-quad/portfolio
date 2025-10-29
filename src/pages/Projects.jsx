import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeaturedProjects from "../components/FeaturedProjects";
import AllProjects from "../components/AllProjects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const featured = projects.filter((p) => p.type === "Featured");
  const general = projects.filter((p) => p.type === "General");

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-white via-indigo-50 to-indigo-100 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Subtle glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
            🧰 Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
            Turning ideas into code and experiments into outcomes.
          </p>
        </motion.div>

        {/* Featured Carousel */}
        {featured.length > 0 && <FeaturedProjects featured={featured} />}

        {/* All Projects Grid */}
        {general.length > 0 && <AllProjects projects={general} />}
      </div>
    </section>
  );
}
