"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <h1 className="h1">Something went wrong</h1>
      <p className="body-md text-secondary">An unexpected error occurred.</p>
      <button onClick={reset} className="btn-small inline-flex">
        Try again
      </button>
    </section>
  );
}
