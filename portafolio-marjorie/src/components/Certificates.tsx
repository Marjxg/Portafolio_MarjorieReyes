import SectionHeading from "./SectionHeading";
import CertificateCard from "./CertificateCard";
import { CERTIFICATES } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificaciones"
      className="relative border-b border-white/5 bg-zinc-950 py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(59,130,246,0.13),transparent_35%)]" />
      </div>
      
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certificaciones"
          title="Cursos y certificaciones"
          description="Formación complementaria que fortalece mis conocimientos en desarrollo de software, tecnologías web y herramientas profesionales."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {CERTIFICATES.map((certificate, index) => (
            <div
              key={certificate.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}