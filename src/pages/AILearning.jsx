import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/ai_learning.json";
import { ExternalLink, BookOpen } from "lucide-react";

export default function AILearning() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100"
        >
          AI & Learning Journey
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelected(item)}
              className="p-6 bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all backdrop-blur"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-indigo-600 dark:text-indigo-400">{item.title}</h3>
                <BookOpen className="w-5 h-5 text-indigo-500" />
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
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

        {/* --- Modal --- */}
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
                className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
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
                <a
                  href={selected.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 text-sm"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
