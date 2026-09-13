import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />
      <section className="py-16">
        <div className="prose-sm mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-xl font-bold">Éditeur du site</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              {site.name} ({site.shortName}) — {site.slogan}.<br />
              {site.sector}.<br />
              Siège : {site.contact.address}.<br />
              Téléphone : {site.contact.phone}.<br />
              Email : {site.contact.email}.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Directeur de la publication</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              La direction générale de {site.name}.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Hébergement</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              {/* TODO: compléter avec l'hébergeur définitif */}
              Les informations relatives à l'hébergeur seront précisées lors de la mise en
              production du site.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Propriété intellectuelle</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              L'ensemble des contenus de ce site (textes, visuels, logo, marque « {site.name} »)
              est la propriété exclusive de {site.shortName}, sauf mention contraire. Toute
              reproduction sans autorisation préalable est interdite.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Responsabilité</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Les informations diffusées sur ce site ont une vocation institutionnelle. Elles ne
              constituent en aucun cas un avis médical. {site.shortName} s'efforce d'assurer
              l'exactitude des informations publiées sans pouvoir en garantir l'exhaustivité.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
