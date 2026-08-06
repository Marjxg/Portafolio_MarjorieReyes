import { SKILL_CATEGORIES } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import SkillCategory from "./SkillCategory";

const LEGEND = [
  { label: "Experiencia profesional", dot: "bg-rose-500" },
  { label: "Experiencia personal", dot: "bg-cyan-500" },
  { label: "Conocimiento", dot: "bg-white/25" },
];

export default function Skills() {
  return (
    <section id="tecnologias" className="relative overflow-hidden bg-violet-900/10 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-96 w-xl -translate-x-1/2 rounded-full bg-rose-600/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_60%)]" />
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.08)_1px,transparent_1px)]
            bg-size-[36px_36px]
            mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          "
        />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Habilidades técnicas"
          title="Tecnologías y herramientas"
          description="Tecnologías que utilizo para desarrollar aplicaciones web, APIs, bases de datos y soluciones empresariales."
          align="center"
        />
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LEGEND.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 text-xs text-zinc-500"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} aria-hidden="true" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:items-stretch">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className="h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <SkillCategory {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}