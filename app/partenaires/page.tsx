import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Handshake } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Card } from "@/components/card";
import { partenaires, programmes } from "@/lib/content/partenaires";

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "Les partenaires de KENEYA KOUNAFONI SO : institutions, ONG, entreprises technologiques et acteurs de la santé numérique.",
  alternates: { canonical: "/partenaires" },
};

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        title="Nos partenaires"
        description="KKS avance avec un écosystème de partenaires institutionnels, technique et associatifs, au Mali et à l'international."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Partenaires" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partenaires.map((partenaire) => (
              <Card key={partenaire.name} hover className="flex flex-col items-start">
                <div className="relative h-16 w-full">
                  <Image
                    src={partenaire.image}
                    alt={partenaire.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h2 className="mt-4 font-heading text-lg font-bold">{partenaire.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {partenaire.description}
                </p>
                {partenaire.url && (
                  <a
                    href={partenaire.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-kks-green hover:text-kks-ocre"
                  >
                    Visiter le site
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Devenir partenaire"
            title="Construisons ensemble la santé numérique de demain"
            description="Trois formes de collaboration selon votre organisation et vos objectifs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programmes.map((programme) => (
              <Card key={programme.title} hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-ocre-light text-kks-ocre">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{programme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kks-gray/70">
                  {programme.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact?objet=Devenir partenaire"
              className="inline-flex items-center gap-2 rounded-full bg-kks-ocre px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-ocre-dark"
            >
              Devenir partenaire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
