import Image from "next/image";
import { profile } from "@/lib/content";
import { ArrowRightIcon, BriefcaseIcon, MapPinIcon } from "./icons";
import { SocialLinks } from "./social-links";
import { Container, Section } from "./ui";

export function Hero() {
  return (
    <Section
      id="home"
      labelledBy="home-heading"
      className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob blob-indigo animate-floaty-slow -left-24 -top-28 h-[26rem] w-[26rem]" />
        <div className="blob blob-violet animate-floaty right-[-4rem] top-4 h-[22rem] w-[22rem]" />
        <div className="blob blob-cyan animate-floaty-slow bottom-[-8rem] left-1/3 h-[20rem] w-[20rem]" />
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-[var(--shadow-soft)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-whatsapp" />
              </span>
              WordPress Developer &amp; Software Engineering Student
            </span>

            <h1
              id="home-heading"
              className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4rem]"
            >
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-3 text-lg font-semibold text-ink-soft sm:text-xl">
              {profile.role}
              <span aria-hidden className="mx-2 text-border-strong">
                |
              </span>
              <span className="font-medium text-muted">
                {profile.roleSecondary}
              </span>
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-accent-ink shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent-strong"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <SocialLinks />
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPinIcon className="h-[18px] w-[18px] text-faint" />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative rounded-[2rem] gradient-primary p-[3px] shadow-[var(--shadow-lift)]">
                <div className="overflow-hidden rounded-[1.9rem] bg-surface">
                  <Image
                    src="/images/hamd-portfolio.png"
                    alt="Hamd Ali, WordPress Developer"
                    width={1295}
                    height={1215}
                    priority
                    sizes="(min-width: 1024px) 384px, 90vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="animate-floaty absolute -bottom-3 -left-3 flex items-center gap-2.5 rounded-2xl border border-border bg-surface/90 px-3.5 py-2 shadow-[var(--shadow-card)] backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl gradient-primary text-white">
                  <BriefcaseIcon className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight text-ink">
                  <span className="block font-semibold">7 months</span>
                  <span className="block text-muted">WordPress &amp; Elementor</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
