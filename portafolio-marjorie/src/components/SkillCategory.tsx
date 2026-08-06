import type { LucideIcon } from "lucide-react";
import type { Skill } from "@/types/portfolio";
import SkillBadge from "./SkillBadge";

type SkillCategoryProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
};

export default function SkillCategory({
  title,
  description,
  icon: Icon,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-base font-semibold text-white">{title}</h3>
          <p className="text-xs text-zinc-500">{description}</p>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías de ${title}`}>
        {skills.map((skill) => (
          <li key={skill.name}>
            <SkillBadge skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}