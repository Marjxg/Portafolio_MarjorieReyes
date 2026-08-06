import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="relative border-b border-white/5 bg-zinc-950 py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyectos destacados"
          description="Proyectos profesionales de los que he sido parte y proyectos personales que he desarrollado como método de autoaprendizaje."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:items-stretch">
          {PROJECTS.map((project, index) => (
            <div
              key={project.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}