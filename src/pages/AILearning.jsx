import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Sparkles } from "lucide-react";

const learningData = [
  
];

export default function AILearning() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Subtle glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4"
        >
          🌱 Personal Learning & Future Goals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          {/* <span className="font-medium text-indigo-500">Structured curiosity — always in motion.</span> <br />
          Certifications give me structure, but projects give me purpose — I’m always looking for that next spark of curiosity that keeps me growing. */}
        </motion.p>

        {/* Learning cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelected(item)}
              className="group p-6 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all backdrop-blur-lg"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 transition">
                  {item.title}
                </h3>
                <BookOpen className="w-5 h-5 text-indigo-500" />
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-indigo-500">{item.status}</div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Sparkles className="mx-auto w-8 h-8 text-indigo-500 mb-3" />
          <p className="text-lg italic text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            “<span className="text-indigo-500 font-medium">I plan on updating this page soon. Stay tuned!</span>”
          </p>
          
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {selected.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-indigo-500">{selected.status}</div>
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-indigo-500 hover:text-indigo-600 text-sm"
                  >
                    View Resource <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
