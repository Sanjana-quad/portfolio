// import projects from "../data/projects.json";
// import ProjectCard from "../components/ProjectCard";

// export default function Projects() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {projects.map(p => <ProjectCard key={p.id} project={p} />)}
//     </section>
//   );
// }

// import projectsData from "../data/projects.json";
// import FeaturedProjects from "../components/FeaturedProjects";
// import AllProjects from "../components/AllProjects";

// export default function Projects() {
//   return (
//     <div className="min-h-screen">
//       <FeaturedProjects featured={projectsData.featured} />
//       <AllProjects projects={projectsData.all} />
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetch("${import.meta.env.BASE_URL}/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const featured = projects.filter(p => p.type === "Featured");
  const general = projects.filter(p => p.type === "General");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Projects
        </h2>

        {/* --- Featured Carousel --- */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showStatus={false}
          className="rounded-2xl shadow-lg mb-16 overflow-hidden"
        >
          {featured.map((proj, index) => (
            <div key={index} className="relative group mx-auto max-w-4xl">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover h-[420px] w-full rounded-2xl opacity-90 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">{proj.title}</h3>
                <p className="mt-2 max-w-xl text-center text-sm">{proj.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={proj.github} target="_blank" className="underline">
                    GitHub
                  </a> 
                
                  {proj.demo !== "#" && (
                    <a href={proj.demo} target="_blank" className="underline">
                      Live Demo
                    </a>
                  )}
                
                 </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* --- General Projects Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {general.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-2xl shadow hover:shadow-xl cursor-pointer backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-all"
              onClick={() => setModal(proj)}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Modal --- */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg w-full mx-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              {modal.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {modal.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Tech: {modal.tech.join(", ")}
            </p>
            <div className="flex space-x-4">
              <a href={modal.github} target="_blank" className="underline">
                GitHub
              </a>
              {modal.demo !== "#" && (
                <a href={modal.demo} target="_blank" className="underline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
