import { motion } from "framer-motion";
import profileImg from "../assets/ss.jpg";
import { ArrowDownCircle, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/shadcn-io/magnetic-button";

import { BackgroundPaths } from "./ui/shadcn-io/background-paths";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: .2, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
    relative flex flex-col md:flex-row items-center justify-center min-h-[90vh]
    px-6 md:px-16 overflow-hidden
  "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-100">
        
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

       

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
          Backend Engineer building APIs today, designing interfaces for tomorrow.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            href="/portfolio/projects"
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
            href="/portfolio/contact"
          >
            <MagneticButton />
            {/* <Send size={18} /> */}
            
          </a>
        </div>
      </motion.div>

      
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

          
        </div>
      </motion.div>
    </motion.section>
  );
}
