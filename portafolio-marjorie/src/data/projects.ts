import type { Project } from "@/types/portfolio";

const ECOMMERCE_API_GITHUB_URL = "https://github.com/Marjxg/ApiEcommerce.git";
const PORTAL_BC_GITHUB_URL = "https://portalbc.vercel.app";

export const PROJECTS: Project[] = [
  {
    slug: "sistema-gestion-planilla",
    title: "Sistema de Gestión de Planilla",
    img: "/images/PLANILLAS.png",
    description:
      "Sistema para gestionar procesos institucionales relacionados con planillas y recursos humanos.",
    technologies: ["PHP", "Symfony", "PostgreSQL", "Docker", "Javascript", "MongoDB", "Bootstrap"],
    features: ["APIs REST", "Autenticación", "Gestión de usuarios", "Reportes", "Documentación", "Manejo de correos"],
    institutional: true,
  },
  {
    slug: "sistema-evaluacion-docente",
    title: "Sistema de Evaluación Docente",
    img: "/images/COMEVAL.png",
    description:
      "Aplicación para gestionar procesos de evaluación docente, resultados, documentos y notificaciones.",
    technologies: ["PHP", "Symfony", "PostgreSQL", "Docker", "Javascript", "MongoDB", "Bootstrap"],
    features: ["Evaluaciones", "Reportes", "Gestión documental", "Notificaciones"],
    institutional: true,
  },
  {
    slug: "sistema-encuestas-egreso",
    title: "Sistema de Encuestas de Egreso",
    img: "/images/Encuestas.jpeg",
    description:
      "Sistema desarrollado desde cero para administrar encuestas de egresados y analizar información académica.",
    technologies: ["PHP", "Symfony", "PostgreSQL", "Javascript", "MongoDB", "Bootstrap", "JWT", "Apache Superset"],
    features: ["Arquitectura", "Base de datos", "Backend", "Frontend", "Integraciones"],
    institutional: true,
  },
  {
    slug: "portal-bc",
    title: "Portal web de la Biblioteca Central",
    img: "/images/Portal_bc.png",
    description: "Sitio web con gestión de contenido y paneles administrativos para procesos administrativos.",
    technologies: ["PHP", "Laravel", "MySQL", "Python", "FilamentPHP", "React", "Tailwind CSS"],
    features: ["CRUD", "Roles", "Autenticación", "Diseño", "Desarrollo", "Automatización", "Gestión de contenidos"],
    institutional: false,
    url: PORTAL_BC_GITHUB_URL,
  },
  {
    slug: "api-ecommerce",
    title: "API Ecommerce",
    img: "/images/API_ECOMMERCE.png",
    description: "API REST para gestionar categorías, productos y usuarios.",
    technologies: [".NET", "ASP.NET Core", "SQL Server", "JWT", "Identity", "Swagger", "Docker"],
    features: ["CRUD", "Roles", "Autenticación", "Paginación", "Caché", "Subida de imágenes", "Seeding"],
    institutional: false,
    url: ECOMMERCE_API_GITHUB_URL,
  },
];