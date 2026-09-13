import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Activity, Code2, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { projets } from "@/lib/content/projets";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return {};
  return {
    title: projet.name,
    description: projet.impact,
    alternates: { canonical: `/projets/${projet.slug}` },
  };
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) notFound();

  return (
    <>
      <PageHero
        title={projet.name}
        description={projet.impact}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Projets", href: "/projets" },
          { label: projet.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-kks-gray/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-kks-ocre" />
              {projet.zone}
            </span>
            <span className="rounded-full bg-kks-ocre-light px-3 py-1 text-xs font-bold text-kks-ocre">
              {projet.year}
            </span>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <SectionHeading eyebrow="Contexte" title="Le contexte du projet" />
              <p className="mt-4 leading-relaxed text-kks-gray/80">{projet.context}</p>
            </div>

            <div className="rounded-2xl border-l-4 border-kks-ocre bg-kks-ocre-light p-6">
              <h2 className="font-heading text-lg font-bold">Problématique</h2>
              <p className="mt-2 leading-relaxed text-kks-gray/80">{projet.problem}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold">Solution proposée</h2>
              <p className="mt-4 leading-relaxed text-kks-gray/80">{projet.solution}</p>
            </div>

            <div>
              <h2 className="flex items-center gap-2.5 font-heading text-2xl font-bold">
                <Code2 className="h-6 w-6 text-kks-green" />
                Technologies utilisées
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {projet.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-kks-green-light px-4 py-1.5 text-sm font-semibold text-kks-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-circuit rounded-2xl bg-kks-green-deep p-8 text-white">
              <h2 className="flex items-center gap-2.5 font-heading text-xl font-bold">
                <Activity className="h-5 w-5 text-kks-ocre" />
                Résultats & impact
              </h2>
              <p className="mt-3 leading-relaxed text-white/85">{projet.impact}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
