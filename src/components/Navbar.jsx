import { NavLink } from "react-router-dom";
import { FiGithub, FiMail, FiSun, FiMoon} from "react-icons/fi";
import useTheme from "../hooks/useTheme";


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
        <div className="flex items-center gap-4">
          <NavLink to="/" className="text-xl font-bold">Sanjana Satheesh</NavLink>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/experience" className={linkClass}>Experience</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/ailearning" className={linkClass}>AI Learning</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" title={theme === "dark" ? "Switch to dark mode" : "Switch to light mode"} >
            {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <a href="https://github.com/Sanjana-quad" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiGithub size={18} />
          </a>
          <a href="mailto:sanjanasatheesh.ss@gmail.com" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiMail size={18} />
          </a>
          <a href="/resume" className="ml-2 inline-block px-3 py-1.5 border rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
