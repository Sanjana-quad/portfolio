import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json"; 

export default function Skills() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    // fetch("../data/skills.json")
    //   .then((res) => res.json())
    //   .then((data) => 
        setSkills(data);
  }, []);


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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Skills & Tools
        </h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-indigo-500 pl-3">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-white/30 dark:bg-gray-800/40 rounded-2xl border border-gray-200/30 dark:border-gray-700/40 shadow-sm hover:shadow-md transition"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
