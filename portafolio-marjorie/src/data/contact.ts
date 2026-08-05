import { Mail } from "lucide-react";
import type { ContactChannel } from "@/types/portfolio";

export const contactInfo = {
  email: "rmarjoriee71@gmail.com",
  linkedin: "https://linkedin.com/in/marjoriegr",
  github: "https://github.com/Marjxg",
  location: "Ciudad de Guatemala, Guatemala",
  availability: "Disponible para nuevas oportunidades",
  modalities: "Presencial, híbrida o remota",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    label: "Correo",
    description: "Envíame un mensaje para conversar.",
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    description: "Conectemos y conoce más sobre mi experiencia profesional.",
    href: contactInfo.linkedin,
    iconSrc: "/icons/linkedin.svg",
    external: true,
  },
  {
    label: "GitHub",
    description: "Explora algunos de mis proyectos.",
    href: contactInfo.github,
    iconSrc: "/icons/github.svg",
    external: true,
  },
];