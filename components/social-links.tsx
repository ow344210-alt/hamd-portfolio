import { socialLinks, type SocialLink } from "@/lib/content";
import { cn } from "@/lib/utils";
import { FacebookIcon, GithubIcon, LinkedInIcon, MailIcon } from "./icons";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
  facebook: FacebookIcon,
  mail: MailIcon,
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export function SocialIconLink({
  link,
  className,
}: {
  link: SocialLink;
  className?: string;
}) {
  const Icon = iconMap[link.icon];
  const external = isExternal(link.href);

  return (
    <a
      href={link.href}
      aria-label={link.label}
      title={link.label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink-soft transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent-strong",
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <SocialIconLink link={link} />
        </li>
      ))}
    </ul>
  );
}
