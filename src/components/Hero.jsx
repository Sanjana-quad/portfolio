import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Sanjana Satheesh
        </h1>
        <h2 className="mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          AI / ML Developer | Data Engineer | Integration Engineer
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          Self-taught AI/ML developer passionate about designing scalable AI
          integrations using microservices, REST APIs, and vector search systems.
        </p>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500">
          <img src={profileImg} alt="Sanjana Satheesh" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
