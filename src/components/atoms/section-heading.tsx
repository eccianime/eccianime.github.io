import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: Readonly<{
  eyebrow: string;
  title: string;
  subtitle?: string;
}>) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-foreground" /> {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05] text-gradient">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
