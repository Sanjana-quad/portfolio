import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../data/skills.json";
const layoutType = "rings";

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
                                <>
                                        { layoutType === "rings" ? (
                                            <motion.div
                                                key={index}
                                                className="relative flex flex-col items-center justify-center p-4 bg-white/30 dark:bg-gray-800/40 rounded-2xl border border-gray-200/30 dark:border-gray-700/40 shadow-sm hover:shadow-md transition group"
                                                whileHover={{ scale: 1.07 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
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
                                                            strokeDashoffset={2 * Math.PI * 35 * (1 - skill.level / 100)}
                                                            strokeLinecap="round"
                                                            initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                                                            animate={{ strokeDashoffset: 2 * Math.PI * 35 * (1 - skill.level / 100) }}
                                                            transition={{ duration: 1 }}
                                                        />
                                                        <defs>
                                                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" stopColor="#6366f1" />
                                                                <stop offset="100%" stopColor="#06b6d4" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>

                                                {/* Tooltip */}
                                                <span className="absolute bottom-20 scale-0 rounded bg-gray-900 text-gray-100 text-xs py-1 px-2 group-hover:scale-100 transition-transform duration-200">
                                                    {skill.desc}
                                                </span>
                                            </motion.div>
                                        ) : (

                                            <motion.div
                                                key={index}
                                                className="p-4 bg-white/30 dark:bg-gray-800/40 rounded-xl border border-gray-200/30 dark:border-gray-700/40 shadow-sm hover:shadow-md transition group"
                                                whileHover={{ scale: 1.03 }}
                                            >
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                                                    <motion.div
                                                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1.2 }}
                                                    />
                                                </div>

                                                {/* Tooltip */}
                                                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-900 text-gray-100 text-xs py-1 px-2 group-hover:scale-100 transition-transform duration-200">
                                                    {skill.desc}
                                                </span>
                                            </motion.div>

                                        )}
                                    </>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
