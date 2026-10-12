"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CloseIcon, MenuIcon } from "./icons";
import { Container } from "./ui";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled || open
          ? "border-b border-border bg-bg/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-border/70 bg-bg/80 backdrop-blur-md",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-md"
            onClick={() => setOpen(false)}
          >
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

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-ink"
                          : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full gradient-primary transition-opacity",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-accent-ink shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="py-2">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-border/70 py-3.5 text-base font-medium last:border-b-0",
                        isActive ? "text-accent-strong" : "text-ink",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-4 flex items-center justify-center rounded-full gradient-primary px-4 py-3 text-sm font-semibold text-accent-ink"
            >
              Get in touch
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
