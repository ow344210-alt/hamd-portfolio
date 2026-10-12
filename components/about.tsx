import { aboutParagraphs, education, focusAreas } from "@/lib/content";
import { GraduationCapIcon } from "./icons";
import { Container, Section, SectionHeading } from "./ui";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="bg-surface-muted/40">
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="A developer focused on clean, working websites"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-ink-soft sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7">
            <h3 className="font-display text-lg font-bold text-ink">
              What I focus on
            </h3>
            <ul className="mt-4 space-y-4">
              {focusAreas.map((area, index) => (
                <li key={area.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-xs font-bold text-white shadow-[var(--shadow-soft)]"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{area.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-lg font-bold text-ink">Education</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[var(--shadow-card)] sm:p-6"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent-soft text-accent"
                >
                  <GraduationCapIcon />
                </span>
                <div>
                  <p className="font-semibold leading-snug text-ink">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-2 inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-strong">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
