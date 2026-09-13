import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

/** Bandeau d'appel à l'action final — cahier §32, section 10. */
export function CtaBand() {
  return (
    <section className="bg-circuit bg-kks-green-deep">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-bold tracking-widest text-kks-ocre uppercase">
          Vous avez un projet de santé numérique ?
        </p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Échangeons sur votre besoin et construisons ensemble une solution adaptée.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Établissement de santé, institution, ONG ou entreprise : {site.shortName} vous
          accompagne de l'idée au déploiement.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-kks-ocre px-7 py-3.5 font-heading text-sm font-bold text-white shadow-lg transition-colors hover:bg-kks-ocre-dark"
          >
            Parler à {site.shortName}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/solutions"
            className="rounded-full border border-white/30 px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
