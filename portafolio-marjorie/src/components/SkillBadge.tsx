import type { Skill } from "@/types/portfolio";

const LEVEL_STYLES: Record<Skill["level"], string> = {
  profesional: "border-rose-300/30 bg-linear-to-br from-violet-500/15 via-rose-100/15 to-rose-400/15 text-rose-300",
  experiencia: "border-blue-300/30 bg-linear-to-br from-blue-500/15 via-blue-100/15 to-cyan-400/15 text-cyan-300",
  conocimiento: "border-white/10 bg-transparent text-zinc-400",
};

const LEVEL_LABEL: Record<Skill["level"], string> = {
  profesional: "Principal",
  experiencia: "Experiencia profesional",
  conocimiento: "Conocimiento",
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      title={LEVEL_LABEL[skill.level]}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-white/30 ${LEVEL_STYLES[skill.level]}`}
    >
      {skill.name}
      <span className="sr-only"> — {LEVEL_LABEL[skill.level]}</span>
    </span>
  );
}