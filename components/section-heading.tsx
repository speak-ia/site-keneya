export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="font-heading text-sm font-bold tracking-widest text-kks-ocre uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-kks-gray"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-kks-gray/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
