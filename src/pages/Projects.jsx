import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(p => <ProjectCard key={p.id} project={p} />)}
    </section>
  );
}
