import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ContactCardProps = {
  label: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  iconSrc?: string;
  external?: boolean;
};

export default function ContactCard({
  label,
  description,
  href,
  icon: Icon,
  iconSrc,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-rose-300/15 bg-white/3 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-300/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <span
        className="
        flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
        border border-rose-300/30
        bg-linear-to-br from-violet-500/15 via-rose-100/15 to-rose-400/15
        text-rose-300
        transition-colors duration-300
        group-hover:border-blue-300/30
        group-hover:text-blue-300"
      >
        {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}

        {iconSrc && (
          <span
            className="h-5 w-5 bg-current"
            style={{
              WebkitMaskImage: `url(${iconSrc})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: `url(${iconSrc})`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
            aria-hidden="true"
          />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
          {label}

          <ArrowUpRight
            className="h-3.5 w-3.5 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
            aria-hidden="true"
          />
        </div>

        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </a>
  );
}