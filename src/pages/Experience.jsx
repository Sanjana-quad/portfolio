// import experiences from "../data/experience.json";
// import ExperienceCard from "../components/ExperienceCard";

// export default function Experience() {
//   return (
//     <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
//       <div className="max-w-5xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
//           Experience
//         </h2>

//         <div className="grid gap-8 md:grid-cols-2">
//           {experiences.map((exp, idx) => (
//             <ExperienceCard key={idx} {...exp} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('${import.meta.env.BASE_URL}/data/experience.json')
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Experience
        </h2>

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {exp.role}
                </h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.duration}
                </span>
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.location}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Projects:</h4>
                {exp.projects.map((proj, i) => (
                  <div key={i} className="pl-3 border-l-2 border-indigo-400">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {proj.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
