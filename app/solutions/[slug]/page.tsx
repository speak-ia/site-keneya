import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink, Users, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/lib/content/solutions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero
        title={solution.name}
        description={solution.tagline}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
          <div className="space-y-12">
            <div>
              <SectionHeading eyebrow="Présentation" title="À quoi sert cette solution ?" />
              <p className="mt-5 leading-relaxed text-kks-gray/80">{solution.description}</p>
            </div>

            <div className="rounded-2xl border-l-4 border-kks-ocre bg-kks-ocre-light p-6">
              <h2 className="font-heading text-lg font-bold">Le problème résolu</h2>
              <p className="mt-2 leading-relaxed text-kks-gray/80">{solution.problem}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold">Fonctionnalités principales</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-white p-4 text-sm shadow-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-kks-green" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold">Vos avantages</h2>
              <ul className="mt-5 space-y-3">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kks-green text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-kks-gray/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-kks-green" />
                <h3 className="font-heading font-bold">Public cible</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-kks-gray/75">
                {solution.audience.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <Wrench className="h-5 w-5 text-kks-green" />
                <h3 className="font-heading font-bold">Technologie</h3>
              </div>
              <p className="mt-3 text-sm text-kks-gray/75">{solution.tech}</p>
            </div>

            {solution.slug === "tiaw" && (
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="font-heading font-bold">Tableau de bord TI@W</h3>
                <p className="mt-2 text-sm text-kks-gray/75">
                  Accédez à l'espace d'administration pour gérer les pharmacies, les utilisateurs et les indicateurs.
                </p>
                <a
                  href="https://tiaw.keneyakunafoniso.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-kks-green px-5 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark"
                >
                  Ouvrir le dashboard
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            <div className="bg-circuit rounded-2xl bg-kks-green-deep p-7 text-white">
              <h3 className="font-heading text-lg font-bold">Envie d'en savoir plus ?</h3>
              <p className="mt-2 text-sm text-white/80">
                Échangez avec notre équipe ou assistez à une démonstration personnalisée.
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href={`/contact?objet=${encodeURIComponent(`Demande de démonstration — ${solution.name}`)}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-kks-ocre px-5 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-ocre-dark"
                >
                  Demander une démonstration
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
