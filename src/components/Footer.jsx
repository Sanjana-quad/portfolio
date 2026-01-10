// export default function Footer() {
//   return (
//     <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
//       <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
//         © {new Date().getFullYear()} Sanjana Satheesh • Built with React + Vite + Tailwind
//       </div>
//     </footer>
//   );
// }
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="transparent border-t border-gray-200 dark:border-gray-700 py-4 mt-8 backdrop-blur-md bg-white/30 dark:bg-gray-600/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <p>© {currentYear} Sanjana Satheesh. All rights reserved.</p>
        <div className="flex gap-1">
          <a href="/portfolio/" className="hover:text-indigo-500">Home</a>
          <a href="/portfolio/projects" className="hover:text-indigo-500">Projects</a>
          <a href="/portfolio/contact" className="hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
