/**
 * Projets / réalisations — cahier des charges §9.
 * ⚠️ Contenus d'exemple à valider par KKS avant publication.
 */
export type Projet = {
  slug: string;
  name: string;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  impact: string;
  zone: string;
  year: string;
};

export const projets: Projet[] = [
  {
    slug: "tiaw-app-sante",
    name: "TI@W — Application mobile santé",
    context:
      "Au Mali, l'accès à l'information pharmaceutique reste fragmenté : difficulté à identifier les pharmacies ouvertes, oublis de traitements, absence de suivi automatisé des constantes.",
    problem:
      "Comment rapprocher les services pharmaceutiques et le suivi santé des populations via un outil simple, mobile et adapté aux réalités locales ?",
    solution:
      "Conception et développement d'une application mobile complète : annuaire géolocalisé des pharmacies, rappels de médicaments, suivi tension/diabète, commande en ligne et back-office d'administration.",
    technologies: ["Flutter", "Supabase", "Next.js", "OpenStreetMap"],
    impact:
      "Application déployée avec un écosystème complet (mobile + back-office) posant les bases d'une plateforme nationale de l'information médicale.",
    zone: "Bamako, Mali",
    year: "2026",
  },
  {
    slug: "digitalisation-pharmacies",
    name: "Digitalisation des pharmacies partenaires",
    context:
      "Les pharmacies de quartier gèrent encore largement leurs stocks et leurs ventes sur papier, ce qui limite leur visibilité et leur efficacité.",
    problem:
      "Comment outiller simplement les pharmacies pour gérer leur activité et se rendre visibles auprès des patients ?",
    solution:
      "Intégration des pharmacies dans l'écosystème TI@W : fiche détaillée, géolocalisation, gestion des produits disponibles et réception des commandes.",
    technologies: ["Next.js", "Supabase", "Flutter"],
    impact: "Meilleure visibilité des pharmacies et accès patient facilité aux produits de santé.",
    zone: "Mali",
    year: "2026",
  },
  {
    slug: "sis-communautaire",
    name: "Système d'information de santé communautaire",
    context:
      "Les programmes de santé communautaire produisent des volumes importants de données terrain difficilement exploitables en temps utile.",
    problem:
      "Comment structurer la remontée des données de santé communautaire pour améliorer la prise de décision ?",
    solution:
      "Conception d'un système de collecte mobile hors-ligne couplé à des tableaux de bord décisionnels pour les responsables de programme.",
    technologies: ["Flutter", "Next.js", "Supabase"],
    impact: "Données terrain disponibles en quasi temps réel pour le pilotage des programmes.",
    zone: "Mali / Afrique de l'Ouest",
    year: "2026",
  },
];
