import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { offres } from "@/lib/content/carriere";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carrière",
  description: `Rejoignez ${site.name} : opportunités professionnelles, stages et collaborations dans la santé numérique au Mali.`,
  alternates: { canonical: "/carriere" },
};

export default function CarrierePage() {
  return (
    <>
      <PageHero
        title="Carrière chez KKS"
        description="Rejoignez une équipe qui construit la santé numérique de demain, au Mali et pour l'Afrique."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Carrière" }]}
      />

      {/* Offres */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Opportunités"
            title="Postes ouverts & appels à candidatures"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offres.map((offre) => (
              <Card key={offre.slug} hover className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-kks-green-light px-3 py-1 text-xs font-bold text-kks-green">
                    <Briefcase className="h-3.5 w-3.5" />
                    {offre.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-kks-gray/60">
                    <MapPin className="h-3.5 w-3.5" />
                    {offre.location}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-xl font-bold">{offre.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {offre.description}
                </p>
                <Link
                  href={`/contact?objet=${encodeURIComponent(`Candidature — ${offre.title}`)}`}
                  className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green hover:text-kks-ocre"
                >
                  Postuler
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <GraduationCap className="mx-auto h-12 w-12 text-kks-green" />
          <h2 className="mt-5 font-heading text-3xl font-extrabold">
            Stages, collaborations & candidatures spontanées
          </h2>
          <p className="mt-4 leading-relaxed text-kks-gray/70">
            Développeurs, data analysts, professionnels de santé, étudiants en informatique ou en
            santé publique : si vous partagez notre mission, écrivez-nous. Nous étudions toutes les
            candidatures sérieuses.
          </p>
          <Link
            href="/contact?objet=Candidature spontanée"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-kks-green px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark"
          >
            <Send className="h-4 w-4" />
            Envoyer ma candidature
          </Link>
        </div>
      </section>
    </>
  );
}
