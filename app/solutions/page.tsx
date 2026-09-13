import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Card, CardLinkFooter } from "@/components/card";
import { solutions } from "@/lib/content/solutions";

export const metadata: Metadata = {
  title: "Nos solutions",
  description:
    "Les solutions numériques de santé développées par KENEYA KOUNAFONI SO : applications mobiles, plateformes web et outils de gestion de l'information médicale.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Nos solutions"
        description="Des outils concrets, développés et maintenus par KKS, répondant aux besoins des professionnels de santé, des structures et des patients."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Solutions" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card key={solution.slug} hover className="flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-kks-green to-kks-green-dark font-heading text-lg font-extrabold text-white">
                    {solution.name.slice(0, 2)}
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold">{solution.name}</h2>
                    <p className="text-sm font-semibold text-kks-ocre">{solution.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {solution.description}
                </p>
                <p className="mt-4 rounded-lg bg-kks-gray-light px-3 py-2 text-xs font-medium text-kks-gray/70">
                  Technologie : {solution.tech}
                </p>
                <CardLinkFooter href={`/solutions/${solution.slug}`} label="En savoir plus" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
