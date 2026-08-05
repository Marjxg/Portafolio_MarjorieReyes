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
    <section id="tecnologias" className="relative border-b border-white/5 bg-zinc-950 py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Habilidades técnicas"
          title="Tecnologías y herramientas"
          description="Tecnologías que utilizo para desarrollar aplicaciones web, APIs, bases de datos y soluciones empresariales."
          align="center"
        />

        {/* Leyenda de jerarquía, sin porcentajes ni barras de progreso */}
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