import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToggleLeft, ToggleRight } from "lucide-react";
import data from "../data/skills.json";

export default function Skills() {
  const [skills, setSkills] = useState({});
  const [viewMode, setViewMode] = useState("rings");

  useEffect(() => {
    setSkills(data);
    const saved = localStorage.getItem("skills-view");
    if (saved) setViewMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("skills-view", viewMode);
  }, [viewMode]);

  if (!Object.keys(skills).length) {
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Skills & Tools</h2>
          <p className="text-gray-500">Loading skills…</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative py-24
        bg-gradient-to-br 
        from-orange-50 via-white to-yellow-100
        dark:from-indigo-950 dark:via-purple-900 dark:to-blue-950
        transition-colors duration-700
        text-gray-900 dark:text-gray-100
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-orange-400/10 dark:bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-purple-400 dark:to-blue-400">
            🧠 Skills & Tools
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            The toolkit I use to design, build, and scale ideas.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end items-center mb-6 pr-2">
          <button
            onClick={() =>
              setViewMode(viewMode === "rings" ? "bars" : "rings")
            }
            className="flex items-center gap-2 text-sm px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition"
          >
            {viewMode === "rings" ? (
              <>
                <ToggleRight className="w-4 h-4" /> Switch to Bars
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4" /> Switch to Rings
              </>
            )}
          </button>
        </div>

        {/* Skill Categories */}
        <div className="space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-gradient-l from-orange-400 to-yellow-400 dark:from-purple-400 dark:to-blue-400 pl-3">
                {category}
              </h3>

              {/* Skill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative p-5 bg-white/50 dark:bg-gray-800/40 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-purple-400 transition group"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Skill Icon + Level */}
                    {viewMode === "rings" ? (
                      <div className="relative flex flex-col items-center justify-center">
                        <div className="relative w-20 h-20 mb-3">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="35"
                              stroke="currentColor"
                              strokeWidth="6"
                              className="text-gray-300 dark:text-gray-700"
                              fill="none"
                            />
                            <motion.circle
                              cx="40"
                              cy="40"
                              r="35"
                              stroke="url(#grad)"
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray={2 * Math.PI * 35}
                              strokeDashoffset={
                                2 * Math.PI * 35 * (1 - skill.level / 100)
                              }
                              strokeLinecap="round"
                              initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                              animate={{
                                strokeDashoffset:
                                  2 * Math.PI * 35 * (1 - skill.level / 100),
                              }}
                              transition={{ duration: 1 }}
                            />
                            <defs>
                              <linearGradient
                                id="grad"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#f97316"
                                  className="dark:stop-purple-400"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#facc15"
                                  className="dark:stop-blue-400"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src={`${import.meta.env.BASE_URL}${skill.icon}`}
                              alt={skill.name}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                          {skill.name}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={`${import.meta.env.BASE_URL}${skill.icon}`}
                            alt={skill.name}
                            className="w-8 h-8"
                          />
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                            {skill.name}
                          </p>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 dark:from-purple-400 dark:to-blue-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2 }}
                          />
                        </div>
                      </>
                    )}

                    {/* Tooltip */}
                    <span className="absolute bottom-20 scale-0 rounded bg-gray-900 text-gray-100 text-xs py-1 px-2 group-hover:scale-100 transition-transform duration-200 whitespace-nowrap">
                      {skill.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
