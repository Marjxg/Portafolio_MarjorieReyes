import Link from "next/link";
import { ArrowRight, Code2, Lock } from "lucide-react";
import type { Project } from "@/types/portfolio";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/5">

      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-linear-to-br from-zinc-900 to-zinc-800/60">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_60%)]"
          aria-hidden="true"
        />

        {project.img ? (
          <Image
            src={project.img}
            alt={`Vista previa del proyecto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-4"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center p-4 text-zinc-500">
            No disponible
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        {/* Badges de tecnología: mismo estilo usado en Experience y Skills */}
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-white/25 hover:text-white">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 rounded text-sm font-medium text-white transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Ver detalles
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          {project.institutional ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Proyecto institucional
            </span>
          ) : project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Abrir
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}