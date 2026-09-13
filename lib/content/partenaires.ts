/**
 * Partenaires — cahier des charges §13.
 * Logos placés dans public/.
 */
export type Partenaire = {
  name: string;
  description: string;
  url?: string;
  image: string;
};

export const partenaires: Partenaire[] = [
  {
    name: "Organisation mondiale de la Santé",
    description: "Partenariat institutionnel international pour la transformation numérique du système de santé.",
    url: "https://www.who.int/fr",
    image: "/oms.jpeg",
  },
  {
    name: "Muso",
    description: "Co-conception de programmes de santé communautaire et d'accès aux soins.",
    url: "https://musohealth.org",
    image: "/muso.jpeg",
  },
  {
    name: "Direction Générale de la Santé et de l'Hygiène Publique",
    description: "Partenariat avec les autorités sanitaires maliennes pour la digitalisation du secteur.",
    image: "/dgshp.jpeg",
  },
  {
    name: "Digi Santé Mali",
    description: "Partenaire technologique pour l'intégration et le déploiement de solutions de santé numérique.",
    image: "/Digi.jpeg",
  },
  {
    name: "République du Mali",
    description: "Collaboration institutionnelle avec les autorités de la République du Mali.",
    image: "/sante.jpeg",
  },
  {
    name: "Santé Diabète",
    description: "Partenariat associatif dédié à la prise en charge du diabète et des maladies chroniques.",
    url: "https://santediabete.org",
    image: "/sante-diabete.jpeg",
  },
];

export const programmes: { title: string; description: string }[] = [
  {
    title: "Partenariat institutionnel",
    description:
      "Collaboration avec les ministères, directions de santé et collectivités pour les projets de santé publique numérique.",
  },
  {
    title: "Partenariat ONG & coopération",
    description:
      "Appui technique aux organisations internationales et projets de coopération dans leurs programmes santé.",
  },
  {
    title: "Partenariat technologique",
    description:
      "Intégration de technologies complémentaires et co-construction de solutions avec des entreprises tech.",
  },
];
