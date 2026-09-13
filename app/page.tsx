import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Globe2,
  HeartPulse,
  Lightbulb,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Card, CardLinkFooter } from "@/components/card";
import { site } from "@/lib/site";
import { services } from "@/lib/content/services";
import { solutions } from "@/lib/content/solutions";
import { projets } from "@/lib/content/projets";
import { articles } from "@/lib/content/actualites";
import { partenaires } from "@/lib/content/partenaires";
import Image from "next/image";

const pillars = [
  {
    icon: HeartPulse,
    title: "Santé",
    text: "Amélioration de la qualité, de l'accès et de la circulation de l'information médicale.",
  },
  {
    icon: Cpu,
    title: "Technologie",
    text: "Développement et intégration de solutions informatiques adaptées aux besoins du secteur de la santé.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Technologies numériques au service de la transformation des systèmes de santé.",
  },
];

const horizons = [
  {
    icon: MapPin,
    title: "Mali",
    text: "Connaissance du contexte local, proximité avec les acteurs de santé et solutions adaptées aux réalités maliennes.",
    href: "/mali-international",
  },
  {
    icon: Globe2,
    title: "Afrique",
    text: "Des solutions conçues pour être adaptées aux différents contextes africains.",
    href: "/mali-international",
  },
  {
    icon: ShieldCheck,
    title: "International",
    text: "Un partenaire crédible pour les institutions, ONG et programmes de transformation numérique.",
    href: "/mali-international",
  },
];

export default function HomePage() {
  const featuredArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* ============ HERO (§32) ============ */}
      <section className="bg-circuit relative overflow-hidden bg-gradient-to-br from-kks-green-deep via-kks-green-dark to-kks-green">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90">
              <MapPin className="h-3.5 w-3.5 text-kks-ocre" />
              {site.sector} — Bamako, Mali
            </p>
            <h1 className="mt-6 font-heading text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              KENEYA KOUNAFONI
              <span className="mt-2 block text-2xl font-semibold text-kks-ocre-light sm:text-3xl">
                {site.slogan}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              « {site.baseline} »
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-kks-ocre px-7 py-3.5 font-heading text-sm font-bold text-white shadow-lg transition-colors hover:bg-kks-ocre-dark"
              >
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Visuel : carte santé numérique stylisée */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-8 rounded-full border border-white/15" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <div className="absolute inset-24 rounded-full border border-white/5" />
              <div className="absolute top-1/2 left-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white shadow-2xl">
                <span className="relative font-heading text-3xl font-extrabold text-kks-green">
                  KS
                  <span className="absolute -top-3 -right-5 flex h-7 w-7 items-center justify-center rounded-full bg-kks-ocre text-sm font-bold text-white">
                    +
                  </span>
                </span>
              </div>
              {[
                { label: "Hôpitaux", pos: "top-6 left-1/2 -translate-x-1/2" },
                { label: "Pharmacies", pos: "top-1/2 right-0 -translate-y-1/2" },
                { label: "Patients", pos: "bottom-6 left-1/2 -translate-x-1/2" },
                { label: "Données", pos: "top-1/2 left-0 -translate-y-1/2" },
              ].map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.pos} rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur`}
                >
                  {node.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — QUI SOMMES-NOUS ? ============ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Qui sommes-nous ?"
                title="Une entreprise à l'intersection de la santé, de la technologie et de l'innovation"
                description={`${site.name} (${site.shortName}) est une entreprise malienne spécialisée en informatique médicale. Elle conçoit et déploie des solutions digitales pour améliorer la gestion et l'accès à l'information médicale, au Mali et à l'international.`}
              />
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Confiance", "Innovation", "Santé", "Proximité"].map((value) => (
                  <span
                    key={value}
                    className="rounded-full bg-kks-green-light px-4 py-1.5 text-sm font-semibold text-kks-green"
                  >
                    {value}
                  </span>
                ))}
              </div>
              <Link
                href="/a-propos"
                className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green transition-colors hover:text-kks-ocre"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-1">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-kks-gray/70">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — DOMAINES D'EXPERTISE ============ */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Nos services"
            title="Nos domaines d'expertise"
            description="De l'informatique médicale au conseil, KKS couvre l'ensemble de la chaîne de valeur de la santé numérique."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kks-gray/70">
                  {service.description}
                </p>
                <CardLinkFooter href="/services" label="Découvrir" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — NOS SOLUTIONS ============ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Nos solutions"
            title="Des outils numériques conçus pour la santé"
            description="Plateformes et applications développées par KKS pour les professionnels, les structures et les patients."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => (
              <Card key={solution.slug} className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-kks-green to-kks-green-dark font-heading text-lg font-extrabold text-white">
                  {solution.name.slice(0, 2)}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">{solution.name}</h3>
                <p className="mt-1 text-sm font-semibold text-kks-ocre">{solution.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {solution.description}
                </p>
                <CardLinkFooter href={`/solutions/${solution.slug}`} label="En savoir plus" />
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact?objet=Demande de démonstration"
              className="inline-flex items-center gap-2 rounded-full bg-kks-green px-7 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark"
            >
              Demander une démonstration
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — NOTRE IMPACT ============ */}
      <section className="bg-circuit bg-kks-green">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-5xl font-extrabold text-white">
                {stat.value}
                <span className="text-kks-ocre-light">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 6 — MALI → AFRIQUE → MONDE ============ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Notre territoire"
            title="Mali → Afrique → Monde"
            description="Ancrée au Mali, tournée vers l'Afrique, ouverte sur le monde : KKS construit des ponts entre innovation africaine et standards internationaux."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {horizons.map((horizon) => (
              <Link
                key={horizon.title}
                href={horizon.href}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-kks-green/30 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-kks-green-light text-kks-green transition-colors group-hover:bg-kks-green group-hover:text-white">
                  <horizon.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">{horizon.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kks-gray/70">{horizon.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 7 — NOS PROJETS ============ */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Nos réalisations"
              title="Nos projets"
              description="Des projets concrets au service des acteurs de santé et des populations."
            />
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green hover:text-kks-ocre"
            >
              Tous nos projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projets.map((projet) => (
              <Card key={projet.slug} className="flex flex-col" hover>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-kks-ocre-light px-3 py-1 text-xs font-bold text-kks-ocre">
                    {projet.year}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-kks-gray/60">
                    <MapPin className="h-3.5 w-3.5" />
                    {projet.zone}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{projet.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {projet.impact}
                </p>
                <CardLinkFooter href={`/projets/${projet.slug}`} label="Voir le projet" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8 — PARTENAIRES ============ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Ils nous font confiance"
            title="Nos partenaires"
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
            {partenaires.map((partenaire) => (
              <div
                key={partenaire.name}
                title={partenaire.name}
                className="group relative aspect-[3/2] rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-kks-green/30"
              >
                <Image
                  src={partenaire.image}
                  alt={partenaire.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green hover:text-kks-ocre"
            >
              Devenir partenaire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* ============ SECTION 9 — ACTUALITÉS ============ */}
      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Actualités"
              title="Les dernières nouvelles de KKS"
            />
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green hover:text-kks-ocre"
            >
              Toutes les actualités
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <Card key={article.slug} className="flex flex-col" hover>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-kks-green-light px-3 py-1 text-xs font-bold text-kks-green">
                    {article.category}
                  </span>
                  <time className="text-xs text-kks-gray/50">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="mt-4 font-heading text-lg leading-snug font-bold">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-kks-gray/70">
                  {article.excerpt}
                </p>
                <CardLinkFooter href={`/actualites/${article.slug}`} label="Lire l'article" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 10 — CTA FINAL ============ */}
      <CtaBand />
    </>
  );
}
