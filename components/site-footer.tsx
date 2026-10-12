import { navItems, profile } from "@/lib/content";
import { MailIcon } from "./icons";
import { SocialLinks } from "./social-links";
import { Container } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div aria-hidden className="h-px w-full gradient-hairline" />
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)]"
              >
                HA
              </span>
              <span className="font-display text-[15px] font-bold tracking-tight text-ink">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {profile.role} &middot; {profile.roleSecondary}. Building clean,
              responsive websites with WordPress.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Elsewhere
            </h2>
            <SocialLinks className="mt-4" />
            <a
              href={profile.emailHref}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-strong"
            >
              <MailIcon className="h-[18px] w-[18px]" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-faint">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
