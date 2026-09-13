import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Handshake, MapPinned, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "Mali & International",
  description:
    "KKS intervient au Mali et développe des partenariats en Afrique et à l'international : institutions, ONG, programmes de coopération et transformation numérique.",
  alternates: { canonical: "/mali-international" },
};

const maliPoints = [
  "Connaissance fine du contexte sanitaire et institutionnel local",
  "Proximité avec les acteurs de santé maliens",
  "Compréhension des besoins réels des structures de santé",
  "Solutions adaptées aux réalités de connectivité et de terrain",
];

const africaPoints = [
  "Solutions conçues pour les contextes africains (offline-first, multilingue)",
  "Adaptabilité aux environnements de santé d'Afrique de l'Ouest et au-delà",
  "Capitalisation sur l'expérience malienne pour d'autres pays",
];

const internationalPoints = [
  { label: "Institutions et organisations internationales" },
  { label: "ONG internationales et organismes de santé" },
  { label: "Entreprises et partenaires technologiques" },
  { label: "Projets de coopération et programmes de transformation numérique" },
];

export default function MaliInternationalPage() {
  return (
    <>
      <PageHero
        title="Mali & International"
        description="Une expertise enracinée au Mali, pensée pour l'Afrique et ouverte aux partenariats internationaux."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mali & International" }]}
      />

      {/* Mali */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Notre base"
                title="Le Mali, notre terrain d'excellence"
                description="Basés à Bamako, nous construisons des solutions pensées d'abord pour les professionnels, les structures et les populations du Mali."
              />
              <ul className="mt-7 space-y-3.5">
                {maliPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-kks-green" />
                    <span className="text-kks-gray/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Carte stylisée */}
            <div
              aria-hidden="true"
              className="bg-circuit relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] bg-gradient-to-br from-kks-green to-kks-green-deep"
            >
              <div className="absolute inset-10 rounded-full border border-white/15" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
              <div className="z-10 rounded-2xl bg-white/10 px-8 py-5 text-center backdrop-blur">
                <p className="font-heading text-3xl font-extrabold text-white">Bamako</p>
                <p className="mt-1 text-sm font-medium text-kks-ocre-light">Mali — Afrique de l'Ouest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afrique */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              aria-hidden="true"
              className="order-last mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] bg-gradient-to-br from-kks-ocre to-kks-ocre-dark lg:order-first"
            >
              <div className="px-8 text-center">
                <Globe2 className="mx-auto h-16 w-16 text-white/90" />
                <p className="mt-4 font-heading text-2xl font-extrabold text-white">
                  L'Afrique, notre horizon
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Notre vision régionale"
                title="Des solutions pensées pour les contextes africains"
                description="Ce qui fonctionne au Mali peut transformer d'autres systèmes de santé africains : nous concevons pour l'adaptabilité."
              />
              <ul className="mt-7 space-y-3.5">
                {africaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-kks-ocre" />
                    <span className="text-kks-gray/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Nos partenariats"
            title="Un partenaire pour vos projets internationaux"
            description="KKS se positionne comme l'interface technique locale de vos programmes de santé numérique."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {internationalPoints.map((point) => (
              <Card key={point.label} hover className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                  <Handshake className="h-6 w-6" />
                </div>
                <p className="font-heading font-bold">{point.label}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact?objet=Proposition de partenariat"
              className="inline-flex items-center gap-2 rounded-full bg-kks-green px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark"
            >
              Discuter d'un partenariat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
