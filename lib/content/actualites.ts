/**
 * Actualités — cahier des charges §12.
 * ⚠️ Articles d'exemple à remplacer par les vraies actualités de KKS.
 * Pour ajouter un article : une entrée ici suffit (fiche + sitemap générés).
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string; // ISO
};

export const articles: Article[] = [
  {
    slug: "lancement-tiaw-application-sante",
    title: "Lancement de TI@W, l'application mobile santé de KKS",
    excerpt:
      "KENEYA KOUNAFONI SO déploie TI@W, une application mobile qui rapproche pharmacies, suivi santé et commande de produits des utilisateurs au Mali.",
    content: [
      "KENEYA KOUNAFONI SO annonce le déploiement de TI@W, son application mobile dédiée à l'information médicale et au suivi santé.",
      "TI@W permet de localiser les pharmacies et structures de santé, de programmer des rappels de traitement, de suivre sa tension artérielle et de commander des produits de santé en ligne.",
      "« La technologie au service d'une santé mieux informée » : cette première réalisation illustre la mission de KKS — connecter la technologie à la santé, au plus près des réalités maliennes.",
    ],
    category: "Produits",
    date: "2026-09-01",
  },
  {
    slug: "kks-sante-numerique-mali-vision",
    title: "Notre vision de la santé numérique au Mali",
    excerpt:
      "Informatique médicale, données de santé, interopérabilité : KKS pose sa vision d'une transformation numérique du système de santé malien.",
    content: [
      "La transformation numérique de la santé ne se décrète pas : elle se construit avec les acteurs de terrain, dans le respect des réalités locales.",
      "KENEYA KOUNAFONI SO s'appuie sur trois piliers — informatique médicale, gestion de l'information de santé et accompagnement des institutions — pour construire des solutions adaptées au Mali et à l'Afrique.",
      "Notre ambition : faire du Mali un terrain d'innovation de référence pour la santé numérique en Afrique de l'Ouest.",
    ],
    category: "Vision",
    date: "2026-08-15",
  },
  {
    slug: "kks-recherche-partenaires",
    title: "KKS ouvre ses programmes de partenariat",
    excerpt:
      "Institutions, ONG, entreprises technologiques et acteurs de santé : KKS lance ses programmes de collaboration et appels à partenariats.",
    content: [
      "KENEYA KOUNAFONI SO ouvre officiellement ses programmes de partenariat aux institutions publiques, organisations internationales, ONG, entreprises technologiques et acteurs du secteur médical.",
      "Les collaborations peuvent porter sur la co-conception de solutions, le déploiement de projets de santé numérique ou l'accompagnement de programmes de transformation digitale.",
      "Contactez-nous via notre page « Devenir partenaire » pour échanger sur votre projet.",
    ],
    category: "Partenariats",
    date: "2026-07-20",
  },
];
