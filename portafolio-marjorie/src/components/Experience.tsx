import SectionHeading from "./SectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="relative border-b border-white/5 bg-zinc-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experiencia"
          title="Mi trayectoria profesional"
          description="He participado en el desarrollo de sistemas empresariales reales, colaborando en distintas etapas del ciclo de desarrollo de software."
          align="center"
        />

        <div className="mt-14">
          <ExperienceTimeline entries={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}