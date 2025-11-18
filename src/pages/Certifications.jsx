import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Achievements() {
  const [data, setData] = useState({ achievements: [], certifications: [] });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/achievements.json`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Guided by curiosity, grounded in progress. A journey of learning
            and growth.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-rows-[auto_auto] gap-10">

           {/* --- Certifications --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-indigo-500" />
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {data.certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-5 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  {c.image && (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-16 h-16 object-contain rounded-md border border-gray-200 dark:border-gray-700"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-bold dark:text-cyan-400 text-indigo-500 underline">
                      <a
                href={c.url}
                target="_blank">
                {c.title}
              </a>
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {c.organization} • {c.year}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                      {c.description}
                    </p>
                    {c.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {c.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-300/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* --- Achievements --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-indigo-500" />
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                Achievements
              </h3>
            </div>

            <ul className="space-y-6">
              {data.achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {a.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {a.organization} • {a.year}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {a.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}

