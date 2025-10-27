export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm mt-2">{project.summary}</p>
      <div className="mt-3 flex gap-2 items-center">
        {project.stack?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">Demo</a>}
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">GitHub</a>}
      </div>
    </div>
  );
}
