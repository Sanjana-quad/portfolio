import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import AILearning from "./pages/AILearning";
import Contact from "./pages/Contact";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/ailearning" element={<AILearning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
//       <h1 className="text-4xl font-bold">Sanjana Satheesh</h1>
//     </div>
//   );
// }

