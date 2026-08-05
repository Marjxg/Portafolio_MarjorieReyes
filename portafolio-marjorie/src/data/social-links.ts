import { Mail } from "lucide-react";
import type { SocialLink } from "@/types/portfolio";
import { contactInfo } from "@/data/contact";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: contactInfo.github,
    iconSrc: "/icons/github.svg",
    external: true,
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    iconSrc: "/icons/linkedin.svg",
    external: true,
  },
  {
    label: "Correo",
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
];