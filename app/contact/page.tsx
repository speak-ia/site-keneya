import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${site.name} pour vos projets de santé numérique : demandes de renseignements, démonstrations, devis et partenariats.`,
  alternates: { canonical: "/contact" },
};

const coordonnees = [
  {
    icon: MapPin,
    label: "Adresse",
    value: site.contact.address,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Discuter directement",
    href: `https://wa.me/${site.contact.whatsapp}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ objet?: string }>;
}) {
  const { objet } = await searchParams;

  return (
    <>
      <PageHero
        title="Contactez-nous"
        description="Un projet, une question, une démonstration ? L'équipe KKS vous répond rapidement."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
          {/* Coordonnées + carte */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {coordonnees.map((item) => {
                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kks-green-light text-kks-green">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider text-kks-gray/50 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-kks-gray">{item.value}</p>
                    </div>
                  </>
                );
                const className =
                  "flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm";
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${className} transition-colors hover:border-kks-green/30`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Localisation — iframe OpenStreetMap */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                title="Localisation de KKS"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-8.05%2C12.55%2C-7.95%2C12.70&layer=mapnik&marker=12.6392%2C-8.0029`}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="font-heading text-2xl font-bold">Envoyez-nous votre demande</h2>
            <p className="mt-2 mb-7 text-sm text-kks-gray/70">
              Renseignements, prestations, démonstration, devis ou partenariat : précisez votre
              besoin, nous revenons vers vous rapidement.
            </p>
            <ContactForm defaultObjet={objet ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}
