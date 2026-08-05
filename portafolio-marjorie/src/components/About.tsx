import { Briefcase, Code2, GraduationCap, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AboutCard from "./AboutCard";
import Image from "next/image";

const STATS = [
  { value: "2+", label: "años de experiencia" },
  { value: "4+", label: "sistemas en producción" },
];

const ABOUT_CARDS = [
  {
    icon: Briefcase,
    title: "Experiencia",
    description: "Más de 2 años desarrollando y manteniendo aplicaciones web.",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Desarrollo Full Stack, APIs REST, arquitectura y bases de datos.",
  },
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Ingeniera en Ciencias y Sistemas.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative border-b border-white/5 bg-zinc-950 py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Conoce un poco más de mi experiencia"
          title="Sobre mí"
          align="center"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Columna de fotografía + estadísticas */}
          <div>
            <div className="relative mx-auto w-full max-w-xs">
              <div
                className="absolute -inset-3 -z-10 rounded-[28px] bg-linear-to-br from-violet-600/20 via-blue-600/10 to-cyan-500/20 blur-2xl"
                aria-hidden="true"
              />
              
              <Image
                  src="/images/foto-profesional.jpg"
                  alt="Retrato de Marjorie Reyes, Desarrolladora Full Stack"
                  width={400}
                  height={500}
                  className="aspect-4/5 w-full rounded-2xl border border-white/10 object-cover"
                  priority
                />
            </div>

            <dl className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="bg-linear-to-r from-cyan-200 via-blue-400 to-cyan-300 bg-clip-text font-display text-xl font-semibold text-transparent">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Columna de contenido textual */}
          <div className="space-y-5 text-zinc-400">
            <p className="text-base leading-relaxed sm:text-lg">
              Soy{" "}
              <span className="font-medium text-zinc-200">
                Ingeniera en Ciencias y Sistemas
              </span>{" "}
              graduada de la Universidad de San Carlos de Guatemala. 
              Me especializo en el desarrollo Full Stack, cuento con experiencia construyendo 
              aplicaciones web y sistemas institucionales.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              Participo en todo el ciclo de desarrollo: diseño de arquitectura, modelado de
              bases de datos, backend y frontend, autenticación y autorización, documentación
              técnica y despliegues con Docker.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              Me interesa construir software mantenible, seguro y escalable, y estoy en
              aprendizaje constante para seguir ampliando mi criterio técnico con nuevas
              herramientas y arquitecturas.
            </p>
          </div>
        </div>

        {/* Tarjetas de información */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {ABOUT_CARDS.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}