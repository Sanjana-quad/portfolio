import experiences from "../data/experience.json";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
