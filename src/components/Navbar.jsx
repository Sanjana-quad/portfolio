import { NavLink, Link } from "react-router-dom";
import { FiGithub, FiMail, FiSun, FiMoon } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import { FileText } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";


export default function Navbar() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const linkClass = ({ isActive }) =>
    "px-3 py-2 rounded-md text-sm font-medium " +
    (isActive ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-800");

  return (
      
    <header className="transparent fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-600/30 border-b border-gray-200 dark:border-gray-700">
     
      <div className="container mx-auto px-2 py-1 flex items-center justify-between">
       <NavLink
            to="/"
            className="text-xl font-bold italic dark:text-cyan-300 text-gray-900 text-shadow-lg"
          >
          SS †
          </NavLink>
        <div className="hidden md:flex items-center gap-4">
          
          
          <nav className="hidden md:flex space-x-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            {/* <NavLink to="/about" className={linkClass}>About</NavLink> */}
            <NavLink to="/experience" className={linkClass}>Experience</NavLink>
            {/* <NavLink to="/skills" className={linkClass}>Skills</NavLink> */}
            <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
            <NavLink to="/ailearning" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

        </div>

        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />
            {/* {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />} */}
          <a href="https://www.linkedin.com/in/sanjana-satheesh-236233189/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaLinkedin size={18} /> </a>
          
          <a href="https://github.com/Sanjana-quad" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiGithub size={18} />
          </a>
          <a href="https://leetcode.com/u/squadronll/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <SiLeetcode size={18} /> </a>
          <a href="mailto:sanjanasatheesh.ss@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiMail size={18} />
          </a>
          <Link to="/resume" className="hoverflex items-center gap-2 
          bg-gradient-to-r from-orange-500 to-yellow-500 
          dark:from-purple-500 dark:to-blue-500 
          text-white px-5 py-2.5 rounded-full font-medium 
          hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-md:text-indigo-500 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Resume
          </Link>

        </div>
      </div>
    </header>
  );
}
