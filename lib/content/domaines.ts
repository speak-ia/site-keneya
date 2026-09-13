import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  FlaskConical,
  Lightbulb,
  Pill,
  Smartphone,
  Stethoscope,
  Users,
  Video,
  Globe,
} from "lucide-react";

/** Domaines d'intervention — cahier des charges §10. ⚠️ À valider par KKS. */
export type Domaine = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const domaines: Domaine[] = [
  {
    title: "Santé publique",
    description: "Appui aux programmes et politiques de santé publique par le numérique.",
    icon: Users,
  },
  {
    title: "Hôpitaux & établissements",
    description: "Digitalisation des processus et systèmes d'information hospitaliers.",
    icon: Building2,
  },
  {
    title: "Médecine",
    description: "Outils numériques au service des pratiques médicales quotidiennes.",
    icon: Stethoscope,
  },
  {
    title: "Pharmacie",
    description: "Solutions de gestion et de visibilité pour les pharmacies.",
    icon: Pill,
  },
  {
    title: "Laboratoires",
    description: "Gestion informatisée des analyses et des résultats de laboratoire.",
    icon: FlaskConical,
  },
  {
    title: "Télémédecine",
    description: "Plateformes de consultation et de suivi médical à distance.",
    icon: Video,
  },
  {
    title: "Données de santé",
    description: "Collecte, structuration et exploitation des données sanitaires.",
    icon: Activity,
  },
  {
    title: "Applications médicales",
    description: "Conception d'applications mobiles et web dédiées à la santé.",
    icon: Smartphone,
  },
  {
    title: "Systèmes d'information de santé",
    description: "Architecture et intégration de SIS interopérables.",
    icon: Globe,
  },
  {
    title: "Innovation & recherche",
    description: "Recherche et développement en santé numérique africaine.",
    icon: Lightbulb,
  },
];
