import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-kks-gray/80">
            {site.name} ({site.shortName}) accorde une importance particulière à la protection des
            données personnelles, dans le respect du cadre légal malien et des bonnes pratiques
            internationales en vigueur dans le secteur de la santé.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold">1. Données collectées</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Via le formulaire de contact : nom et prénom, organisation, email, téléphone, pays,
              objet et contenu du message. Ces informations servent exclusivement à traiter votre
              demande.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">2. Finalités du traitement</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Répondre aux demandes de renseignements, de démonstration, de devis ou de
              partenariat ; traiter les candidatures. Vos données ne font l'objet d'aucune
              prospection commerciale ni d'aucune transmission à des tiers sans votre accord.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">3. Données de santé</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Ce site institutionnel ne collecte aucune donnée médicale. Merci de ne pas transmettre
              d'informations relatives à votre santé via le formulaire de contact.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">4. Durée de conservation</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Les demandes de contact sont conservées le temps nécessaire à leur traitement, puis
              archivées ou supprimées selon nos procédures internes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">5. Vos droits</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Vous pouvez demander l'accès, la rectification ou la suppression de vos données en
              écrivant à{" "}
              <a href={`mailto:${site.contact.email}`} className="text-kks-green underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">6. Cookies</h2>
            <p className="mt-3 leading-relaxed text-kks-gray/80">
              Ce site n'utilise pas de cookies à des fins publicitaires. Des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </div>

          <p className="text-sm text-kks-gray/60">
            Dernière mise à jour : septembre 2026.
          </p>
        </div>
      </section>
    </>
  );
}
