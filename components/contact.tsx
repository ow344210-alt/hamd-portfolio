import { profile, socialLinks } from "@/lib/content";
import { ArrowUpRightIcon, MailIcon, WhatsAppIcon } from "./icons";
import { Container, Section, SectionHeading } from "./ui";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: "mail" | "whatsapp" | "linkedin" | "github";
};

const methods: ContactMethod[] = [
  {
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
    external: false,
    icon: "mail",
  },
  {
    label: "WhatsApp",
    value: profile.whatsappDisplay,
    href: profile.whatsappHref,
    external: true,
    icon: "whatsapp",
  },
  {
    label: "LinkedIn",
    value: "Hamd Ali",
    href: socialLinks[0].href,
    external: true,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "ow344210-alt",
    href: socialLinks[1].href,
    external: true,
    icon: "github",
  },
];

function MethodIcon({ icon }: { icon: ContactMethod["icon"] }) {
  if (icon === "mail") {
    return (
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent-soft text-accent">
        <MailIcon />
      </span>
    );
  }
  if (icon === "whatsapp") {
    return (
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-whatsapp/20 bg-whatsapp-soft text-whatsapp">
        <WhatsAppIcon />
      </span>
    );
  }
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent-soft text-accent">
      {icon === "linkedin" ? (
        <svg
          aria-hidden
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.4V21H3.3V8.9Zm5.9 0h3.26v1.65h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.2V21h-3.4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9.2V8.9Z" />
        </svg>
      ) : (
        <svg
          aria-hidden
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      )}
    </span>
  );
}

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title="Let's work together"
              description="Have a website that needs building or customizing, or just want to connect? Send me a message and I'll get back to you."
            />

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-accent-ink shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                <MailIcon className="h-4 w-4" />
                Email me
              </a>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent-strong"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-whatsapp" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {methods.map((method) => (
              <li key={method.label}>
                <a
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[var(--shadow-card)]"
                >
                  <MethodIcon icon={method.icon} />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                      {method.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-ink group-hover:text-accent-strong">
                      {method.value}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
