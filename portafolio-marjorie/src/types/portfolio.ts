import type { LucideIcon } from "lucide-react";

/**
 * Nivel de dominio de una tecnología. No representa un porcentaje,
 * solo una categoría cualitativa usada para jerarquizar visualmente.
 */
export type SkillLevel = "profesional" | "experiencia" | "conocimiento";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategoryData {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export type ContactChannel = {
  label: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  iconSrc?: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  iconSrc?: string;
  external?: boolean;
};