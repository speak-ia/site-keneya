import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Card, CardLinkFooter } from "@/components/card";
import { articles } from "@/lib/content/actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Actualités de KENEYA KOUNAFONI SO : projets, partenariats, événements et innovations dans la santé numérique au Mali.",
  alternates: { canonical: "/actualites" },
};

export default function ActualitesPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        title="Actualités"
        description="Projets, événements, partenariats et publications : suivez l'actualité de KKS et de la santé numérique."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Actualités" }]}
      />

      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((article) => (
              <Card key={article.slug} hover className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-kks-green-light px-3 py-1 text-xs font-bold text-kks-green">
                    {article.category}
                  </span>
                  <time className="text-xs text-kks-gray/50" dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-4 font-heading text-xl leading-snug font-bold">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {article.excerpt}
                </p>
                <CardLinkFooter href={`/actualites/${article.slug}`} label="Lire l'article" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
