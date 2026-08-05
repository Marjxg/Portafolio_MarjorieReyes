import { Mail } from 'lucide-react';
import { NAV_LINKS } from "@/data/nav-links";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Identidad */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-rose-400 via-violet-400 to-cyan-500 p-px transition-transform duration-300 group-hover:scale-105">
                <span className="flex h-full w-full items-center justify-center rounded-[10px] text-xs font-bold tracking-wide text-white bg-zinc-950/90">
                  MR
                </span>
              </span>

              <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                Marjorie{" "}
                <span className="font-normal text-zinc-400">
                  Reyes
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Desarrolladora Full Stack | Ingeniera en Ciencias y Sistemas
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Conecta
            </h3>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {year} Marjorie Reyes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}