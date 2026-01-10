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
import { Briefcase } from "lucide-react";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/experience.json`)
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
            Learning through building, scaling, and collaborating.
          </p>
        </div>

        <div className="relative border-l border-indigo-400/30 dark:border-indigo-500/40 pl-8 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-8 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                <Briefcase className="text-white w-5 h-5" />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
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
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {exp.location}
              </p>

              {/* Projects */}
              <div className="space-y-3 mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                  Key Projects:
                </h4>
                {exp.projects.map((proj, i) => (
                  <div key={i} className="pl-4 border-l-2 border-indigo-400/70">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {proj.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                  Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
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
