import type { ExperienceEntry } from "@/types/portfolio";
import ExperienceCard from "./ExperienceCard";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

export default function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-10 sm:pl-10">
      {/* Línea vertical del timeline (visible desde sm) */}
      <span
        className="absolute left-1.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-linear-to-b from-violet-400/40 via-blue-400/30 to-transparent sm:block"
        aria-hidden="true"
      />

      {entries.map((entry, index) => (
        <li
          key={entry.role + entry.organization}
          className="relative animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span
            className="absolute -left-10 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-linear-to-br from-violet-400 to-cyan-300 sm:block"
            aria-hidden="true"
          />
          <ExperienceCard entry={entry} />
        </li>
      ))}
    </ol>
  );
}