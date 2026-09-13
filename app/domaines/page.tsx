import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Card } from "@/components/card";
import { domaines } from "@/lib/content/domaines";

export const metadata: Metadata = {
  title: "Nos domaines d'intervention",
  description:
    "Santé publique, hôpitaux, pharmacie, laboratoires, télémédecine, données de santé : les domaines d'intervention de KENEYA KOUNAFONI SO.",
  alternates: { canonical: "/domaines" },
};

export default function DomainesPage() {
  return (
    <>
      <PageHero
        title="Nos domaines d'intervention"
        description="KKS intervient sur l'ensemble des secteurs où la technologie peut transformer l'accès, la qualité et la gestion de la santé."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Domaines d'intervention" }]}
      />

      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {domaines.map((domaine) => (
              <Card key={domaine.title} hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                  <domaine.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-heading text-lg font-bold">{domaine.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-kks-gray/70">
                  {domaine.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
