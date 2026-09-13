import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = localFont({
  variable: "--font-montserrat",
  src: [
    { path: "./fonts/montserrat-500.woff2", weight: "500" },
    { path: "./fonts/montserrat-600.woff2", weight: "600" },
    { path: "./fonts/montserrat-700.woff2", weight: "700" },
    { path: "./fonts/montserrat-800.woff2", weight: "800" },
  ],
});

const openSans = localFont({
  variable: "--font-open-sans",
  src: [
    { path: "./fonts/open-sans-400.woff2", weight: "400" },
    { path: "./fonts/open-sans-500.woff2", weight: "500" },
    { path: "./fonts/open-sans-600.woff2", weight: "600" },
    { path: "./fonts/open-sans-700.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.shortName} — ${site.name}`,
  },
  description: `${site.baseline} ${site.name} (${site.shortName}) est spécialisée en informatique médicale et santé numérique au Mali et à l'international.`,
  keywords: [
    "informatique médicale Mali",
    "santé numérique Mali",
    "digitalisation de la santé",
    "solutions médicales digitales",
    "technologie médicale Afrique",
    "système d'information de santé",
    "innovation santé Mali",
    "logiciel médical Mali",
    "application médicale Afrique",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description: site.baseline,
    url: site.url,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.slogan,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bamako",
    addressCountry: "ML",
  },
  areaServed: ["Mali", "Afrique", "International"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
