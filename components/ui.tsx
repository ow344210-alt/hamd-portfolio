import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 py-10 sm:py-14 lg:py-16", className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-strong">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full gradient-primary" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors",
        tone === "accent"
          ? "border-accent/20 bg-accent-soft text-accent-strong"
          : "border-border bg-surface text-ink-soft hover:border-accent/30 hover:text-accent-strong",
      )}
    >
      {children}
    </span>
  );
}
