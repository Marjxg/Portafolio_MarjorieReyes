import { ArrowRight } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/5 bg-zinc-950">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/30 blur-[100px] animate-pulse-slow" />
        <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-rose-600/30 blur-[100px] animate-pulse-slow" />
        <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-cyan-600/30 blur-[110px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.08)_1px,transparent_1px)]
            bg-size-[36px_36px]
            mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          "
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        {/* Columna de contenido */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse"
              aria-hidden="true"
            />
            Disponible para nuevas oportunidades
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">
              Hola, mi nombre es Marjorie Reyes y soy{" "}
            </span>

            <span className="text-violet-200">
              desarrolladora Full Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-zinc-200">
            Desarrollo soluciones web modernas, enfocadas en rendimiento, buena arquitectura, experiencia de usuario y orientadas a resolver problemas
            reales.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <SocialLinks />
          </div>
        </div>

        {/* Columna visual: panel de código decorativo */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div
            className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-violet-600/20 via-blue-600/10 to-cyan-500/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-2xl border border-white/10 bg-zinc-900/70 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-zinc-500">developer.ts</span>
            </div>

            <pre className="overflow-x-auto px-5 py-6" aria-hidden="true">
              <code className="grid gap-1 font-mono text-[13px] leading-relaxed text-zinc-300">
                <span>{"const developer = {"}</span>
                <span className="pl-4">
                  name: <span className="text-violet-300">{`"Marjorie Reyes"`}</span>,
                </span>
                <span className="pl-4">
                  role: <span className="text-violet-300">{`"Full Stack Developer"`}</span>,
                </span>
                <span className="pl-4">
                  focus: [<span className="text-cyan-300">{`"Web Apps"`}</span>,{" "}
                  <span className="text-cyan-300">{`"APIs"`}</span>,{" "}
                  <span className="text-cyan-300">{`"Databases"`}</span>],
                </span>
                <span className="pl-4">
                  available: <span className="text-rose-300">true</span>,
                </span>
                <span>{"};"}</span>
              </code>
            </pre>

            <span className="sr-only">
              Panel decorativo que resume el perfil de Marjorie Reyes: Desarrolladora Full Stack
              enfocada en aplicaciones web, APIs y bases de datos.
            </span>
          </div>

          <div
            className="absolute -bottom-5 -left-6 hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-xl sm:flex"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            REST API
          </div>
          <div
            className="absolute -top-5 -right-4 hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-xl [animation-delay:1.5s] sm:flex"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            PostgreSQL
          </div>
        </div>
      </div>
    </section>
  );
}