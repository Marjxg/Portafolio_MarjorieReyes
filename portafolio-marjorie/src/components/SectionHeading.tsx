type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`max-w-2xl ${isCentered ? "mx-auto text-center" : "text-left"}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-blue-300/80 ${
          isCentered ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-zinc-400">{description}</p>
      )}
    </div>
  );
}