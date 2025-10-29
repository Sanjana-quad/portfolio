import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { ArrowDownCircle, Send } from "lucide-react";
import { AiOutlineExperiment } from "react-icons/ai";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: .2, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
    relative flex flex-col md:flex-row items-center justify-center min-h-[90vh]
    px-6 md:px-16 overflow-hidden
    bg-gradient-to-br 
    from-orange-100 via-white to-yellow-50
    dark:from-indigo-950 dark:via-purple-900 dark:to-blue-950
    text-gray-900 dark:text-white
  "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        {/* Light glow tint */}
        <div className="
      absolute top-1/2 left-1/2 w-[600px] h-[600px]
      bg-orange-300/20 dark:bg-blue-500/20 
      rounded-full blur-[120px] translate-x-[-50%] translate-y-[-50%]
    " />
        {/* Secondary glow */}
        <div className="
      absolute bottom-0 right-0 w-[400px] h-[400px]
      bg-yellow-300/20 dark:bg-purple-600/20 
      rounded-full blur-[120px]
    " />
      </div>

      {/* Left: Text Section */}
      <motion.div
        initial={{ opacity: 1, y: 40 }}
        animate={{ opacity: 1, y: 2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left max-w-2xl space-y-4"
      >
        <h1 className="
      text-4xl md:text-6xl font-extrabold tracking-tight font-['Space_Grotesk']
    ">
          👋 Hi, I’m{" "}
          <span className="
        bg-clip-text text-transparent 
        bg-gradient-to-r from-orange-500 to-yellow-500
        dark:from-purple-400 dark:to-blue-400
        dark:drop-shadow-[0_0_10px_rgba(120,80,255,0.4)]
      ">
            Sanjana Satheesh
          </span>
        </h1>

        <h2 className="
      text-lg md:text-2xl 
      text-gray-700 dark:text-gray-300
      font-medium
    ">
          Building data-driven and AI-powered systems that learn, adapt, and deliver impact.
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
          I’m a Software Engineer passionate about
          <span className="text-orange-600 dark:text-teal-300 font-medium"> Data Engineering</span>,
          <span className="text-orange-600 dark:text-purple-300 font-medium"> AI Development</span>, and
          <span className="text-orange-600 dark:text-indigo-300 font-medium"> Scalable Backend Systems</span>.
          I love solving real-world problems through code, design, and intelligent automation —
          bringing together the best of software engineering and applied AI to build solutions that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            href="#projects"
            className="
          flex items-center gap-2 
          bg-gradient-to-r from-orange-500 to-yellow-500 
          dark:from-purple-500 dark:to-blue-500 
          text-white px-5 py-2.5 rounded-full font-medium 
          hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-md
        "
          >
            <ArrowDownCircle size={18} />
            View My Work
          </a>
          <a
            href="#contact"
            className="
          flex items-center gap-2 
          border border-gray-300 dark:border-gray-600
          px-5 py-2.5 rounded-full 
          text-gray-700 dark:text-gray-300
          hover:bg-orange-100 dark:hover:bg-white/10 
          hover:scale-[1.03] transition-all duration-300
        "
          >
            <Send size={18} />
            Let’s Connect
          </a>
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      {/* <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative mt-10 md:mt-0"
  >
    <div className="
      w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden
      border-4 border-orange-300 dark:border-purple-500
      shadow-[0_0_25px_rgba(249,115,22,0.3)]
      dark:shadow-[0_0_25px_rgba(168,85,247,0.6)]
      hover:scale-105 transition-transform duration-500
    ">
      <img
        src={profileImg}
        alt="Sanjana Satheesh"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div> */}
      <motion.div
        initial={{ opacity: .2, scale: 1 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: .2, ease: "easeIn" }}
        className="
    relative w-60 h-60 md:w-72 md:h-72 
    rounded-full overflow-hidden 
    border-4 border-orange-300 dark:border-violet-500 
    shadow-[0_0_25px_rgba(249,115,22,0.3)] dark:shadow-[0_0_25px_rgba(168,85,247,0.6)]
    hover:scale-105 transform transition duration-500
  "
      >
        <div className="
    absolute inset-0 
     animate-pulseSlow
  " />
        <img src={profileImg} alt="Sanjana Satheesh" className="w-full h-full object-cover" />
        {/* Optional accent icon */}
        <div className="
    absolute top-4 right-4 w-8 h-8 
     rounded-full 
    flex items-center justify-center
    shadow-sm
  ">

          {/* Use a small icon like a network node or AI symbol */}
          {/* <AiOutlineExperiment className="w-5 h-5 text-indigo-600 dark:text-teal-300" /> */}
        </div>
      </motion.div>
    </motion.section>
  );
}
