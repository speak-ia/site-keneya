import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  HandHeart,
  HeartPulse,
  MonitorSmartphone,
  RefreshCcw,
  Stethoscope,
} from "lucide-react";

/**
 * Services de KKS — cahier des charges §7.
 * ⚠️ Cette liste doit être validée et complétée par KKS avant publication.
 */
export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "informatique-medicale",
    title: "Informatique médicale",
    description:
      "Solutions informatiques adaptées aux établissements et professionnels de santé.",
    points: [
      "Logiciels et outils médicaux sur mesure",
      "Intégration avec les systèmes existants",
      "Formation des équipes soignantes",
    ],
    icon: HeartPulse,
  },
  {
    slug: "digitalisation-sante",
    title: "Digitalisation de la santé",
    description:
      "Accompagnement dans la transformation numérique des processus de santé.",
    points: [
      "Diagnostic numérique de votre structure",
      "Feuille de route de transformation",
      "Conduite du changement",
    ],
    icon: RefreshCcw,
  },
  {
    slug: "solutions-web-mobiles",
    title: "Solutions web et mobiles",
    description:
      "Conception de plateformes, applications et outils numériques destinés au secteur médical.",
    points: [
      "Applications mobiles iOS / Android",
      "Plateformes web sécurisées",
      "Design centré utilisateur (UX/UI)",
    ],
    icon: MonitorSmartphone,
  },
  {
    slug: "gestion-information-medicale",
    title: "Gestion de l'information médicale",
    description:
      "Solutions permettant de mieux organiser, gérer et exploiter l'information médicale.",
    points: [
      "Dossiers médicaux numérisés",
      "Circulation sécurisée de l'information",
      "Confidentialité et traçabilité",
    ],
    icon: Stethoscope,
  },
  {
    slug: "donnees-sante",
    title: "Données & systèmes d'information de santé",
    description:
      "Solutions de collecte, structuration, visualisation et exploitation des données de santé.",
    points: [
      "Collecte terrain (offline-first)",
      "Tableaux de bord décisionnels",
      "Interopérabilité et standards",
    ],
    icon: BarChart3,
  },
  {
    slug: "conseil-accompagnement",
    title: "Conseil & accompagnement",
    description:
      "Accompagnement des institutions, établissements et organisations dans leurs projets numériques de santé.",
    points: [
      "Études et cadrage de projet",
      "Appui aux ONG et institutions",
      "Suivi-évaluation des programmes",
    ],
    icon: HandHeart,
  },
];
