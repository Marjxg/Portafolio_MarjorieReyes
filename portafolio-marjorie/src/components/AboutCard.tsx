import type { LucideIcon } from "lucide-react";

type AboutCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-white/20 hover:bg-white/5">
      <span
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-linear-to-br from-violet-500/20 to-cyan-400/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-violet-500/15 via-blue-500/15 to-cyan-400/15 text-cyan-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="relative mt-4 text-sm font-semibold text-white">{title}</h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}