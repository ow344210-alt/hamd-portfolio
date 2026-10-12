import { projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";
import { Chip, Container, Section, SectionHeading } from "./ui";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow-lift)] sm:p-7",
        project.featured && "border-accent/25",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 gradient-hairline opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
          {project.category}
        </p>
        {project.featured ? (
          <span className="rounded-full gradient-primary px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-[var(--shadow-soft)]">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="font-display mt-2 text-lg font-bold text-ink sm:text-xl">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li key={item}>
            <Chip tone={project.featured ? "accent" : "neutral"}>{item}</Chip>
          </li>
        ))}
      </ul>

      {project.links.length > 0 || project.note ? (
        <div className="mt-auto pt-6">
          {project.links.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-xs leading-relaxed text-faint">
              {project.note}
            </p>
          )}
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      labelledBy="projects-heading"
      className="bg-surface-muted/40"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Projects I've built"
          description="A selection of academic and personal projects. Each one lists the technologies used and an honest summary of what it does."
        />

        <div className="mt-8 space-y-6">
          {featured ? <ProjectCard project={featured} /> : null}
          {rest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
