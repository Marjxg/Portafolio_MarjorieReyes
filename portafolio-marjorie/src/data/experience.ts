import type { ExperienceEntry } from "@/types/portfolio";

export const EXPERIENCE: ExperienceEntry[] = [
    {
        role: "Desarrolladora Full Stack",
        organization: "Universidad de San Carlos de Guatemala",
        period: "Julio 2024 – Junio 2026",
        summary:
            "Desarrollo, mantenimiento y mejora de aplicaciones web institucionales.",
        responsibilities: [
            "Desarrollo con Symfony",
            "Diseño e integración de APIs REST",
            "Diseño y optimización de consultas SQL",
            "Modelado de bases de datos",
            "Documentación técnica",
            "Mantenimiento y desarrollo de nuevos módulos",
            "Dashboard y reportes con Apache Superset",
        ],
        relatedProjects: [
            "Sistema de Administración de Planilla",
            "Sistema de Evaluación Docente",
            "Sistema de Encuestas de Egreso",
        ],
        technologies: ["PHP", "Symfony", "PostgreSQL", "MongoDB", "Docker", "JWT", "JavaScript"],
    },
    {
        role: "Proyecto de Graduación — EPS",
        organization: "Biblioteca Central, Universidad de San Carlos de Guatemala",
        period: "Enero 2025 – Enero 2026",
        summary: "Diseño de una plataforma web gestionable y módulos administrativos para gestión de revistas.",
        responsibilities: [
            "Toma de requerimientos",
            "Diseño de arquitectura",
            "Diseño y modificación de base de datos",
            "Desarrollo backend y frontend",
            "Extracción de datos y automatización de procesos",
            "Seguridad y optimización",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "React", "Tailwind CSS", "APIs REST", "JWT", "Python", "Web Scraping"],
    },
    {
        role: "Representante de servicio al cliente",
        organization: "Innovative Contact Solutions (24/7 Intouch)",
        period: "Noviembre 2021 – Enero 2022 (Contrato temporal)",
        summary: "",
        responsibilities: [
            "Atención al cliente",
            "Resolución de consultas y reclamos",
            "Seguimiento de solicitudes",
            "Cumplimiento de indicadores de calidad y tiempos de atención"
        ],
        technologies: [],
    },
    {
        role: "Generalista de TI",
        organization: "Innovative Contact Solutions (24/7 Intouch)",
        period: "Octubre 2019 – Enero 2020 (Contrato temporal)",
        summary: "",
        responsibilities: [
            "Atención y soporte técnico",
            "Ensamblaje y mantenimiento de equipos de cómputo",
            "Instalación y configuración de software",
            "Control de estado de vida de hardware",
        ],
        technologies: [],
    }
];