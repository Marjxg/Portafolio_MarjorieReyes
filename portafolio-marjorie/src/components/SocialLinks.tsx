import { SOCIAL_LINKS } from "@/data/social-links";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        const isExternal = link.external ?? link.href.startsWith("http");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
            aria-label={link.label}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:border-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span
              className="absolute inset-0 rounded-full bg-linear-to-br from-rose-400 via-violet-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            {Icon && (
              <Icon
                className="relative h-4 w-4"
                aria-hidden="true"
              />
            )}

            {link.iconSrc && (
              <span
                className="relative h-4 w-4 bg-current"
                style={{
                  WebkitMaskImage: `url(${link.iconSrc})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskImage: `url(${link.iconSrc})`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                }}
                aria-hidden="true"
              />
            )}
          </a>
        );
      })}
    </div>
  );
}