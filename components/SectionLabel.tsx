import type { ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
  children: ReactNode;
  align?: "center" | "left";
  tone?: "primary" | "ink" | "muted";
  line?: "gold" | "primary";
  className?: string;
};

/** Small spaced-out uppercase eyebrow, e.g. "— TESTIMONIALS —". */
export default function SectionLabel({ children, align = "center", tone = "ink", line = "gold", className }: Props) {
  const lineCls = cn("label-line h-px w-14 sm:w-20", line === "gold" ? "bg-gold-soft" : "bg-primary");
  const toneCls = tone === "primary" ? "text-primary" : tone === "muted" ? "text-muted" : "text-ink/80";
  return (
    <div
      data-reveal="up"
      className={cn("flex items-center gap-4 sm:gap-6", align === "center" ? "justify-center" : "justify-start", className)}
    >
      {align === "center" && <span className={cn(lineCls, "origin-right")} />}
      <span className={cn("font-sans text-[13px] font-medium uppercase tracking-[0.3em] sm:text-[15px]", toneCls)}>{children}</span>
      <span className={cn(lineCls, "origin-left")} />
    </div>
  );
}
