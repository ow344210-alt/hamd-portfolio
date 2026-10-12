import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Hamd Ali is a WordPress Developer and Software Engineering undergraduate who builds and customizes responsive WordPress websites using Elementor Pro, HTML, and CSS.";

// Optional: set NEXT_PUBLIC_SITE_URL to the final production domain.
// On Vercel, VERCEL_URL is provided automatically at build time.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: "Hamd Ali | WordPress Developer",
    template: "%s | Hamd Ali",
  },
  description,
  applicationName: "Hamd Ali Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Hamd Ali",
    "WordPress Developer",
    "Elementor Pro",
    "Web Developer",
    "Software Engineering",
    "HTML",
    "CSS",
    "Karachi",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hamd Ali",
    title: "Hamd Ali | WordPress Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamd Ali | WordPress Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
