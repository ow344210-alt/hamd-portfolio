import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Error 404
        </p>
        <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-strong"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
