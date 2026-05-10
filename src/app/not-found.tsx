import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <h1 className="h1">404</h1>
      <p className="body-md text-secondary">This page doesn&apos;t exist.</p>
      <Link href="/" className="btn-small inline-flex">
        Back to home
      </Link>
    </section>
  );
}
