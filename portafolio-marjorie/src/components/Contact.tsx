import { Laptop, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ContactCard from "./ContactCard";
import { contactChannels, contactInfo } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-violet-900/10 py-24 sm:py-28">
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
          eyebrow="Contacto"
          title="Construyamos algo juntos"
          description="Actualmente estoy en búsqueda de nuevas oportunidades profesionales y proyectos donde pueda aportar experiencia en desarrollo Full Stack. Mi bandeja de entrada está abierta."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {contactChannels.map((channel) => (
            <ContactCard key={channel.label} {...channel} />
          ))}
        </div>
      </div>
    </section>
  );
}