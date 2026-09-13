import type { Metadata } from "next";
import {
  Accessibility,
  Eye,
  Handshake,
  HeartPulse,
  Lock,
  Lightbulb,
  Milestone,
  Route,
  ShieldCheck,
  Target,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Card } from "@/components/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez ${site.name} : vision, mission, valeurs et approche au service de la transformation numérique de la santé.`,
  alternates: { canonical: "/a-propos" },
};

const valeurs = [
  { icon: Lightbulb, title: "Innovation", text: "Des solutions numériques pensées pour les réalités africaines." },
  { icon: Milestone, title: "Professionnalisme", text: "Des méthodes éprouvées, des livrables de qualité." },
  { icon: Lock, title: "Confidentialité", text: "La protection des données de santé au cœur de chaque projet." },
  { icon: ShieldCheck, title: "Fiabilité", text: "Des systèmes robustes, testés et pérennes." },
  { icon: Accessibility, title: "Accessibilité", text: "Des outils simples, utilisables par tous, partout." },
  { icon: HeartPulse, title: "Impact social", text: "La technologie au service de la santé des populations." },
];

const approche = [
  {
    icon: Eye,
    step: "1. Écouter",
    text: "Comprendre votre contexte, vos contraintes terrain et vos objectifs avant toute proposition.",
  },
  {
    icon: Target,
    step: "2. Concevoir",
    text: "Co-concevoir une solution adaptée avec vos équipes, techniquement et financièrement réaliste.",
  },
  {
    icon: Route,
    step: "3. Déployer",
    text: "Développer, tester et déployer sur le terrain avec formation et conduite du changement.",
  },
  {
    icon: Handshake,
    step: "4. Accompagner",
    text: "Assurer le suivi, la maintenance et l'évolution de vos outils dans la durée.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        title="À propos de KKS"
        description={`${site.name} — ${site.slogan}. Une entreprise de santé numérique ancrée au Mali, tournée vers l'international.`}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      {/* Qui sommes-nous */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Qui sommes-nous ?"
                title="La technologie au service d'une santé mieux informée"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-kks-gray/80">
                <p>
                  KENEYA KOUNAFONI SO — « la maison de l'information médicale » — est une entreprise
                  malienne spécialisée en informatique médicale et en santé numérique.
                </p>
                <p>
                  Nous concevons et déployons des solutions digitales qui améliorent la gestion, la
                  circulation et l'accès à l'information médicale, pour les établissements de santé,
                  les professionnels, les institutions et les populations.
                </p>
                <p>
                  Notre identité associe l'exigence d'une health-tech moderne et l'ancrage culturel
                  malien et africain, avec l'ambition d'une crédibilité internationale.
                </p>
              </div>
            </div>
            <Card className="bg-circuit-light !bg-kks-green-light/50">
              <h3 className="font-heading text-xl font-bold">Notre vision</h3>
              <p className="mt-3 leading-relaxed text-kks-gray/80">
                Faire de la transformation numérique un levier concret d'amélioration des systèmes
                de santé au Mali et en Afrique : une santé plus connectée, plus accessible et plus
                efficace pour tous.
              </p>
              <h3 className="mt-8 font-heading text-xl font-bold">Notre mission</h3>
              <p className="mt-3 leading-relaxed text-kks-gray/80">
                Mettre la technologie et l'information médicale au service des acteurs de santé :
                outiller les professionnels, éclairer les décideurs et rapprocher les services de
                santé des populations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Nos valeurs"
            title="Six valeurs qui guident chacun de nos projets"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valeurs.map((valeur) => (
              <Card key={valeur.title} hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                  <valeur.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{valeur.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-kks-gray/70">{valeur.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Notre approche"
            title="Un accompagnement de terrain, de l'idée à l'impact"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approche.map((etape) => (
              <div key={etape.step} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-green text-white">
                  <etape.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{etape.step}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-kks-gray/70">{etape.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
