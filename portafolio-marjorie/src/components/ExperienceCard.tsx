import { Briefcase, Calendar, CheckCircle2, FolderGit2 } from "lucide-react";
import type { ExperienceEntry } from "@/types/portfolio";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export default function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 g-white/3 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{entry.role}</h3>
          <p className="mt-1 text-sm text-zinc-400">{entry.organization}</p>
        </div>
        {entry.period && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
            <Calendar className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            {entry.period}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{entry.summary}</p>

      <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        <div>
          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            Responsabilidades
          </h4>
          <ul className="mt-2.5 space-y-1.5">
            {entry.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {entry.relatedProjects && entry.relatedProjects.length > 0 && (
          <div>
            <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
              Proyectos relacionados
            </h4>
            <ul className="mt-2.5 space-y-1.5">
              {entry.relatedProjects.map((item) => (
                <li key={item} className="text-sm text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Badges de tecnología: mismo estilo que el nivel "experiencia" usado en Skills */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías utilizadas en ${entry.role}`}>
        {entry.technologies.map((tech) => (
          <li key={tech}>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-white/25 hover:text-white">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}