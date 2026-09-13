/** Offres — cahier des charges §14. ⚠️ Exemples à adapter aux recrutements réels. */
export type Offre = {
  slug: string;
  title: string;
  type: string;
  location: string;
  description: string;
};

export const offres: Offre[] = [
  {
    slug: "developpeur-flutter-stage",
    title: "Développeur mobile Flutter",
    type: "Stage / Freelance",
    location: "Bamako, Mali",
    description:
      "Contribuer au développement de nos applications mobiles santé (Flutter, Supabase) au sein de l'équipe produit.",
  },
  {
    slug: "charge-projet-sante-numerique",
    title: "Chargé(e) de projet santé numérique",
    type: "CDI / Mission",
    location: "Bamako, Mali",
    description:
      "Piloter des projets de transformation numérique auprès d'établissements de santé et d'organisations partenaires.",
  },
];
