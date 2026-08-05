import { Blocks, Database, MonitorSmartphone, Server, Wrench } from "lucide-react";
import type { SkillCategoryData } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategoryData[] = [
  {
    title: "Backend",
    description: "Lógica de negocio, APIs y servicios del lado del servidor.",
    icon: Server,
    skills: [
      { name: "PHP", level: "profesional" },
      { name: "Symfony", level: "profesional" },
      { name: "Laravel", level: "profesional" },
      { name: "APIs REST", level: "profesional" },
      { name: "JWT", level: "profesional" },
      { name: ".NET", level: "experiencia" },
      { name: "C#", level: "experiencia" },
      { name: "Swagger", level: "experiencia" },
      { name: "ASP.NET Core", level: "experiencia" },
      { name: "Node.js", level: "conocimiento" },
      { name: "Java", level: "conocimiento" },
      { name: "OAuth", level: "conocimiento" },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces modernas, accesibles y mantenibles.",
    icon: MonitorSmartphone,
    skills: [
      { name: "JavaScript", level: "profesional" },
      { name: "HTML5", level: "profesional" },
      { name: "CSS3", level: "profesional" },
      { name: "Bootstrap", level: "profesional" },
      { name: "Twig", level: "profesional" },
      { name: "React", level: "experiencia" },
      { name: "TypeScript", level: "conocimiento" },
      { name: "Tailwind CSS", level: "conocimiento" },
    ],
  },
  {
    title: "Bases de datos",
    description: "Modelado, consultas y administración de datos.",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "profesional" },
      { name: "MongoDB", level: "profesional" },
      { name: "MySQL", level: "profesional" },
      { name: "SQL Server", level: "experiencia" },
      { name: "Oracle", level: "conocimiento" },
    ],
  },
  {
    title: "DevOps y herramientas",
    description: "Empaquetado, control de versiones y flujo de trabajo.",
    icon: Wrench,
    skills: [
      { name: "Docker", level: "profesional" },
      { name: "Git", level: "profesional" },
      { name: "GitHub", level: "profesional" },
      { name: "Postman", level: "profesional" },
      { name: "Apache Superset", level: "profesional" },
    ],
  },
  {
    title: "Arquitectura y prácticas",
    description: "Cómo diseño, documento y organizo el trabajo.",
    icon: Blocks,
    skills: [
      { name: "Diseño de APIs REST", level: "experiencia" },
      { name: "Modelado de bases de datos", level: "experiencia" },
      { name: "Autenticación y autorización", level: "experiencia" },
      { name: "Arquitectura de aplicaciones", level: "conocimiento" },
      { name: "Optimización SQL", level: "conocimiento" },
      { name: "Control de versiones", level: "conocimiento" },
      { name: "Documentación técnica", level: "conocimiento" },
      { name: "Scrum", level: "conocimiento" },
    ],
  },
];