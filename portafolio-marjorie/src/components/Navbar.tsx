"use client"; // Componente cliente, usa hooks, eventos y estado

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/nav-links";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Resalta el enlace de la sección visible actualmente en el viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Aplica una sombra/borde sutil cuando se hace scroll, para dar profundidad al navbar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body mientras el drawer móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled
          ? "border-white/10 bg-zinc-950/80 backdrop-blur-xl"
          : "border-white/0 bg-zinc-950/40 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-rose-400 via-violet-400 to-cyan-500 p-px transition-transform duration-300 group-hover:scale-105">
            <span className="flex h-full w-full items-center justify-center rounded-[10px] text-xs font-bold tracking-wide text-white bg-zinc-950/90">
              MR
            </span>
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            Marjorie <span className="font-normal text-zinc-400">Reyes</span>
          </span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <span className={isActive ? "text-white" : ""}>{link.label}</span>
                <span
                  className={`absolute inset-x-3 -bottom-px h-px origin-left rounded-full bg-linear-to-r from-rose-400 via-violet-400 to-cyan-300 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA + botón hamburguesa */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 transition-colors duration-300 hover:border-white/20 hover:text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop móvil */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* Drawer móvil */}
      <div
        className={`fixed inset-y-1 right-0 z-50 flex w-[82%] max-w-xs flex-col border-l border-white/10 bg-violet-500/20 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <span className="font-display text-sm font-semibold text-white">Menú</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-6 bg-black/90">
          {NAV_LINKS.map((link, i) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  } ${isActive ? "bg-white/5 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}