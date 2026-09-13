import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Facebook, Linkedin, Youtube } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { navItems, navMoreItems, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-kks-green-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-white/70">{site.slogan}.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {site.sector} — {site.zone}.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className="font-heading text-sm font-bold tracking-wider text-white uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {[...navItems, ...navMoreItems].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Informations</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kks-ocre" />
                {site.contact.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-kks-ocre" />
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-kks-ocre" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-kks-ocre" />
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Suivez-nous</h3>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: site.socials.facebook },
                { icon: Linkedin, label: "LinkedIn", href: site.socials.linkedin },
                { icon: Youtube, label: "YouTube", href: site.socials.youtube },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-kks-ocre"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-kks-ocre px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-kks-ocre-dark"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
