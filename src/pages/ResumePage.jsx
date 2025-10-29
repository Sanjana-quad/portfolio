// src/pages/ResumePage.jsx
import { Download } from "lucide-react";

export default function ResumePage() {
  const resumePath = `${import.meta.env.BASE_URL}Sanjana_Satheesh_Resume.pdf`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      <div className="w-full max-w-4xl h-[80vh] border rounded-lg shadow-lg overflow-hidden mb-6">
        <iframe
          src={resumePath}
          title="Resume"
          width="100%"
          height="100%"
          className="border-none"
        />
      </div>

      <a
        href={resumePath}
        download="Sanjana_Satheesh_Resume.pdf"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume (PDF)
      </a>
    </div>
  );
}
