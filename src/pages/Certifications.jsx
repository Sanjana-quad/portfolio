import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const [data, setData] = useState({ achievements: [], certifications: [] });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/achievements.json`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* --- Achievements --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Achievements
            </h3>
            <ul className="space-y-6">
              {data.achievements.map((a, i) => (
                <li
                  key={i}
                  className="p-5 bg-white/60 dark:bg-gray-800/60 rounded-xl shadow hover:shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur"
                >
                  <h4 className="text-lg font-bold">{a.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{a.organization} • {a.year}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{a.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- Certifications --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Certifications
            </h3>
            <div className="space-y-6">
              {data.certifications.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white/60 dark:bg-gray-800/60 rounded-xl shadow hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <img src={c.image} alt={c.title} className="w-16 h-16 object-contain" />
                  <div>
                    <h4 className="text-lg font-bold">{c.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{c.organization} • {c.year}</p>
                    <p className="text-xs text-gray-400 mt-1">{c.skills.join(", ")}</p>
                    {c.credential && (
                      <a
                        href={c.credential}
                        target="_blank"
                        className="text-indigo-500 hover:underline text-sm"
                      >
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
