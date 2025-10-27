import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Sanjana Satheesh</h1>
      <p className="mb-6">
        Software Engineer transitioning to Data / AI-aligned Engineering. Hands-on with Python, FastAPI, LangChain, Docker, and building RAG and multilingual OCR pipelines.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded">View Projects</Link>
        <Link to="/about" className="px-4 py-2 border rounded">About</Link>
      </div>
    </section>
  );
}
