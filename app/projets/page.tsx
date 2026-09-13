import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Card, CardLinkFooter } from "@/components/card";
import { projets } from "@/lib/content/projets";

export const metadata: Metadata = {
  title: "Nos projets & réalisations",
  description:
    "Découvrez les projets de santé numérique réalisés par KENEYA KOUNAFONI SO au Mali et en Afrique de l'Ouest.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        title="Nos projets & réalisations"
        description="Des projets concrets qui illustrent notre expertise en informatique médicale et notre impact sur le terrain."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Projets" }]}
      />

      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projets.map((projet) => (
              <Card key={projet.slug} hover className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-kks-ocre-light px-3 py-1 text-xs font-bold text-kks-ocre">
                    {projet.year}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-kks-gray/60">
                    <MapPin className="h-3.5 w-3.5" />
                    {projet.zone}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-xl leading-snug font-bold">{projet.name}</h2>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {projet.context}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-kks-green-light px-2.5 py-0.5 text-xs font-semibold text-kks-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <CardLinkFooter href={`/projets/${projet.slug}`} label="Voir le projet" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
