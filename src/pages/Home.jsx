// import { Link } from "react-router-dom";
// import Hero from "../components/Hero";

// export default function Home() {
//   return (
//     <section className="max-w-3xl mx-auto text-center py-12">
//       {/* <h1 className="text-4xl font-bold mb-4">Sanjana Satheesh</h1>
//       <p className="mb-6">
//         Software Engineer transitioning to Data / AI-aligned Engineering. Hands-on with Python, FastAPI, LangChain, Docker, and building RAG and multilingual OCR pipelines.
//       </p> */}
      
//       <Hero />
//       <div className="flex justify-center gap-3">
//         <Link to="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded">View Projects</Link>
//         <Link to="/about" className="px-4 py-2 border rounded">About</Link>
//       </div>
//     </section>
//   );
// }
//----------------------------------------------------------------------------------
// import { motion } from "framer-motion";
// import profileImg from "../assets/profile.png"; // your actual profile image

// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 px-4">
//       {/* Animated Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center max-w-3xl"
//       >
//         {/* Profile Image with Subtle Glow */}
//         <div className="relative mx-auto w-36 h-36 mb-6">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent-purple blur-md opacity-60"></div>
//           <img
//             src={profileImg}
//             alt="Sanjana Satheesh"
//             className="relative z-10 w-36 h-36 object-cover rounded-full border-4 border-gray-200 dark:border-gray-700"
//           />
//         </div>

//         {/* Name & Tagline */}
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
//             Sanjana Satheesh
//           </span>
//         </h1>

//         <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6">
//           AI/ML Developer & Integration Engineer
//         </p>

//         {/* Tagline Highlight */}
//         <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
//           Building intelligent systems and seamless API integrations — bridging
//           <span className="text-accent-pink"> data </span>and
//           <span className="text-accent-teal"> intelligence</span>.
//         </p>

//         {/* Button Section */}
//         <div className="flex gap-4 justify-center mt-8">
//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.05 }}
//             className="px-5 py-2 rounded-md bg-gradient-to-r from-primary to-accent-purple text-white font-medium shadow-glow hover:shadow-lg transition-shadow"
//           >
//             View Projects
//           </motion.a>

//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             className="px-5 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//           >
//             Contact Me
//           </motion.a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
//------------------------------------------------------------------------------------------------------
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // replace with your actual image path

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 px-6 sm:px-12 md:px-16">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl w-full"
      >
        {/* Profile Image with Glow */}
        <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 sm:mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent-purple blur-md opacity-60"></div>
          <img
            src={profileImg}
            alt="Sanjana Satheesh"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Name & Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
            Sanjana Satheesh
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
          AI/ML Developer & Integration Engineer
        </p>

        {/* Tagline Highlight */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
          Building intelligent systems and seamless API integrations — bridging
          <span className="text-accent-pink"> data </span>and
          <span className="text-accent-teal"> intelligence</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent-purple text-white font-medium shadow-glow hover:shadow-lg transition-all duration-300"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

