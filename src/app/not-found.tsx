import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center bg-charcoal px-gutter text-paper">
      <p className="text-eyebrow tracking-[0.2em] text-silver uppercase">404</p>
      <h1 className="mt-6 max-w-3xl font-display text-display font-light">
        This road doesn’t go anywhere.
      </h1>
      <ButtonLink href="/" variant="solid" surface="dark" className="mt-10">
        Back to AUREL
      </ButtonLink>
    </main>
  );
}