import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

export function ProjectCard(
  props: Readonly<{
    title: string;
    category: string;
    description: string;
    thumbnail: string;
    stack: string[];
    year: string;
    liveUrl?: string;
    githubUrl?: string;
    caseStudyUrl?: string;
    viewCase: string;
    viewLive: string;
    viewGithub: string;
  }>,
) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative rounded-3xl overflow-hidden glass hairline shadow-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <motion.img
          src={props.thumbnail}
          alt={props.title}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground glass px-2.5 py-1 rounded-full">
          {props.category}
        </div>
        <div className="absolute top-4 right-4 text-[11px] text-muted-foreground glass px-2.5 py-1 rounded-full">
          {props.year}
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{props.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{props.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {props.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] text-muted-foreground rounded-full border border-border px-2.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-[13px]">
          {props.caseStudyUrl && (
            <a
              href={props.caseStudyUrl}
              className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
            >
              {props.viewCase} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {props.liveUrl && (
            <a
              href={props.liveUrl}
              className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
            >
              {props.viewLive} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {props.githubUrl && (
            <a
              href={props.githubUrl}
              className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
            >
              {props.viewGithub} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
