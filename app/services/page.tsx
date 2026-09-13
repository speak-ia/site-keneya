import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Card, CardLinkFooter } from "@/components/card";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Informatique médicale, digitalisation de la santé, solutions web et mobiles, gestion de l'information médicale, données de santé, conseil et accompagnement.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos services"
        description="KKS accompagne les acteurs de santé sur l'ensemble de la chaîne de valeur du numérique : conception, intégration, données et conseil."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-circuit-light bg-kks-gray-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} hover className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-xl font-bold">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-kks-gray/70">
                  {service.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-kks-gray/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-kks-green" />
                      {point}
                    </li>
                  ))}
                </ul>
                <CardLinkFooter
                  href={`/contact?objet=${encodeURIComponent(`Demande d'information — ${service.title}`)}`}
                  label="Demander un accompagnement"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
