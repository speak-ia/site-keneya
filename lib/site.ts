/**
 * Configuration centrale du site KENEYA KOUNAFONI SO.
 * ⚠️ Les coordonnées et chiffres clés doivent être validés par KKS avant mise en production.
 */

export const site = {
  name: "KENEYA KOUNAFONI SO",
  shortName: "KKS",
  slogan: "La maison de l'information médicale",
  baseline:
    "Nous mettons la technologie au service d'une santé plus connectée, plus accessible et plus efficace.",
  sector: "Santé numérique / Informatique médicale",
  zone: "Mali et international",
  url: "https://www.keneyakunafoniso.org",
  locale: "fr",

  // ⚠️ Coordonnées à compléter avec les informations officielles avant production
  contact: {
    address: "Bamako, Mali", // TODO: adresse complète
    phone: "+223 00 00 00 00", // TODO: téléphone officiel
    email: "contact@keneyakounafoni.ml", // TODO: email officiel
    whatsapp: "22300000000", // TODO: numéro WhatsApp officiel (format international sans « + ») — cf. cahier §16
    mapsQuery: "Bamako, Mali",
  },

  socials: {
    facebook: "#", // TODO: page Facebook officielle
    linkedin: "#", // TODO: page LinkedIn officielle
    youtube: "#", // TODO: chaîne YouTube officielle
  },

  /**
   * Chiffres clés de la section « Notre impact ».
   * ⚠️ Le cahier des charges (§32, section 5) exige que ces statistiques
   * ne soient affichées que lorsqu'elles sont vérifiées.
   */
  stats: [
    { value: 3, suffix: "+", label: "Projets & solutions" },
    { value: 6, suffix: "+", label: "Partenaires" },
    { value: 3, suffix: "", label: "Régions couvertes" },
    { value: 500, suffix: "+", label: "Professionnels accompagnés" },
  ],
} as const;

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projets", href: "/projets" },
  { label: "Actualités", href: "/actualites" },
] as const;

export const navMoreItems = [
  { label: "Domaines d'intervention", href: "/domaines" },
  { label: "Mali & International", href: "/mali-international" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Carrière", href: "/carriere" },
] as const;
