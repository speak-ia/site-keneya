/**
 * Solutions développées ou distribuées par KKS — cahier des charges §8.
 * Chaque solution dispose d'une fiche complète accessible via /solutions/[slug].
 * ⚠️ À valider et compléter par KKS. Ajouter une entrée ici suffit pour
 * générer automatiquement la fiche et l'entrée du sitemap.
 */
export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  audience: string[];
  benefits: string[];
  tech: string;
};

export const solutions: Solution[] = [
  {
    slug: "tiaw",
    name: "TI@W — SuperApp santé",
    tagline: "Pharmacie et suivi santé dans votre poche",
    description:
      "Application mobile de référence pour localiser les pharmacies, gérer ses rappels de traitement, suivre sa tension et commander ses produits de santé.",
    problem:
      "Difficulté d'accès à l'information sur les pharmacies ouvertes, oublis de prise de médicaments et absence de suivi simple des constantes de santé au quotidien.",
    features: [
      "Annuaire des pharmacies et structures de santé géolocalisées",
      "Rappels médicamenteux intelligents",
      "Suivi de la tension artérielle avec évaluation du risque",
      "Tests santé (tension, diabète)",
      "Commande de produits en pharmacie",
      "Assistance vocale multilingue",
    ],
    audience: ["Particuliers", "Patients chroniques", "Pharmacies partenaires"],
    benefits: [
      "Accès rapide à l'information médicale",
      "Meilleure observance des traitements",
      "Données de santé centralisées et sécurisées",
    ],
    tech: "Flutter, Supabase, OpenStreetMap",
  },
  {
    slug: "kks-dashboard",
    name: "KKS Dashboard",
    tagline: "Pilotage des activités de santé en temps réel",
    description:
      "Plateforme web de supervision et de gestion des données de santé : utilisateurs, structures, commandes et indicateurs épidémiologiques.",
    problem:
      "Les gestionnaires de programmes de santé manquent d'outils centralisés pour suivre l'activité terrain et prendre des décisions rapides.",
    features: [
      "Tableaux de bord temps réel",
      "Gestion des utilisateurs et des structures",
      "Suivi des commandes et des stocks",
      "Notifications et diffusion ciblée",
      "Export et visualisation des données",
    ],
    audience: ["Établissements de santé", "ONG", "Programmes de santé publique"],
    benefits: [
      "Vision consolidée de l'activité",
      "Décisions basées sur les données",
      "Gain de temps administratif",
    ],
    tech: "Next.js, React, Supabase",
  },
  {
    slug: "kks-collect",
    name: "KKS Collect",
    tagline: "Collecte de données de santé sur le terrain",
    description:
      "Solution mobile et web de collecte, structuration et analyse de données sanitaires, conçue pour fonctionner y compris en zone à faible connectivité.",
    problem:
      "Les enquêtes et collectes de données sanitaires sur le terrain restent largement papier, lentes et sujettes aux erreurs de saisie.",
    features: [
      "Formulaires mobiles hors-ligne",
      "Synchronisation automatique",
      "Contrôles qualité des données",
      "Rapports et visualisations automatiques",
    ],
    audience: ["Institutions", "ONG", "Programmes de recherche en santé"],
    benefits: [
      "Collecte accélérée et fiable",
      "Fonctionnement sans réseau",
      "Données exploitables immédiatement",
    ],
    tech: "Flutter, Supabase",
  },
];
