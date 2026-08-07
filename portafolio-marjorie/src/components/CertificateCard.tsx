import Image from "next/image";
import { Calendar, ExternalLink, GraduationCap } from "lucide-react";
import type { Certificate } from "@/types/portfolio";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  // const fileHref = certificate.file ?? certificate.image;
  const fileHref = certificate.file ?? '';

  return (
    <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/5">
      {/* <div className="relative aspect-4/3 overflow-hidden border-b border-white/10 bg-zinc-900">
        <Image
          src={certificate.image}
          alt={`Diploma: ${certificate.title}`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div> */}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-base font-semibold text-white">{certificate.title}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            {certificate.institution}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            {certificate.date}
          </span>
        </div>
        
        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`Temas cubiertos en ${certificate.title}`}
        >
          {certificate.skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-white/25 hover:text-white">
                {skill}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={fileHref}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Ver diploma
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}