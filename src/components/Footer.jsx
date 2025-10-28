// export default function Footer() {
//   return (
//     <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
//       <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
//         © {new Date().getFullYear()} Sanjana Satheesh • Built with React + Vite + Tailwind
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-white/60 dark:bg-gray-950/60 border-t border-gray-200 dark:border-gray-800 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <p>© {currentYear} Sanjana Satheesh. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-indigo-500">Home</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
