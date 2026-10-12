import { experience, softSkills, technicalSkills } from "@/lib/content";
import { BriefcaseIcon, CheckIcon } from "./icons";
import { Chip, Container, Section, SectionHeading } from "./ui";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've worked"
          description="A summary of my professional experience so far, followed by the tools and skills I work with."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
          <article className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-white shadow-[var(--shadow-glow)]"
                >
                  <BriefcaseIcon />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    {experience.role}
                  </h3>
                  <p className="text-sm font-medium text-accent-strong">
                    {experience.company}
                  </p>
                </div>
              </div>
              <span className="inline-flex rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                {experience.duration}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {experience.summary}
            </p>

            <ul className="mt-5 space-y-3">
              {experience.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                Tools
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <li key={tool}>
                    <Chip tone="accent">{tool}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="space-y-6">
            <div>
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-ink">
                <span aria-hidden className="h-2 w-2 rounded-full gradient-primary" />
                Technical Skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-ink">
                <span aria-hidden className="h-2 w-2 rounded-full gradient-primary" />
                Soft Skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
