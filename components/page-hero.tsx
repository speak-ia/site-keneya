import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Bandeau d'en-tête des pages internes. */
export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-circuit bg-gradient-to-br from-kks-green-deep via-kks-green-dark to-kks-green">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-white/70">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
