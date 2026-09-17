import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

export function ProjectCard(
  props: Readonly<{
    id: string;
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
    onClick: () => void;
  }>,
) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);
  const onKeyDown = () => {
    props.onClick();
  };

  return (
    <motion.div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`View ${props.title} details`}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative rounded-3xl overflow-hidden glass hairline shadow-elevated cursor-pointer"
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
            <button
              className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
              onClick={onKeyDown}
            >
              {props.viewCase} <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={onKeyDown}
            className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 py-2 hover:opacity-90 transition-opacity"
          >
            {props.viewCase} <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          {props.liveUrl && (
            <button
              type="button"
              onClick={() => window.open(props.liveUrl, "_blank")}
              className="border border-white inline-flex items-center gap-2 rounded-full text-white text-sm font-medium px-6 py-2 hover:opacity-90 transition-opacity"
            >
              {props.viewLive} <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
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
