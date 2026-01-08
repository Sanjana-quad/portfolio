import { NavLink, Link } from "react-router-dom";
import { FiGithub, FiMail, FiSun, FiMoon } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import { FileText } from "lucide-react";


export default function Navbar() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const linkClass = ({ isActive }) =>
    "px-3 py-2 rounded-md text-sm font-medium " +
    (isActive ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-800");

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className="text-xl font-bold italic underline decoration-orange-400 dark:decoration-green-400 text-shadow-lg"
          >
          Sanjana Satheesh †
          </NavLink>
          <nav className="hidden md:flex items-center gap-1">
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
          <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" title={theme === "dark" ? "Switch to dark mode" : "Switch to light mode"} >
            {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
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
