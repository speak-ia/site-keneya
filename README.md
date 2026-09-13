# KENEYA KOUNAFONI SO — Site vitrine

Site institutionnel de **KENEYA KOUNAFONI SO (KKS)** — *La maison de l'information médicale*.
Santé numérique / Informatique médicale — Bamako, Mali.

Références : `../Cahier des charges – Site web KENEYA KOUNAFONI SO.pdf` et
`../Charte_Graphique_KKS_Design_Complet.pdf`.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS 4** — charte KKS définie dans `app/globals.css` (vert `#166534`, ocre `#C2410C`)
- Polices via `next/font` : Montserrat (titres), Open Sans (texte)
- `lucide-react` (icônes), `zod` (validation du formulaire de contact)

## Démarrer

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de production :

```bash
npm run build && npm start
```

## Modifier les contenus

Tous les contenus éditoriaux sont centralisés dans `lib/` — aucune modification de code de page n'est nécessaire :

| Contenu | Fichier |
|---|---|
| Coordonnées, réseaux sociaux, chiffres clés | `lib/site.ts` |
| Services | `lib/content/services.ts` |
| Solutions (fiches complètes) | `lib/content/solutions.ts` |
| Projets / réalisations | `lib/content/projets.ts` |
| Actualités | `lib/content/actualites.ts` |
| Domaines d'intervention | `lib/content/domaines.ts` |
| Partenaires | `lib/content/partenaires.ts` |
| Offres d'emploi | `lib/content/carriere.ts` |

Ajouter une entrée (ex. une actualité) génère automatiquement sa page, sa carte et son entrée dans le sitemap.

## ⚠️ Avant la mise en production

Checklist issue du cahier des charges (§36) :

1. **Coordonnées officielles** : renseigner téléphone, email, WhatsApp, adresse et réseaux sociaux dans `lib/site.ts` (marqueurs `TODO`).
2. **Domaine** : mettre à jour `site.url` dans `lib/site.ts` (utilisé par le sitemap, robots.txt et les métadonnées).
3. **Chiffres clés** : valider les statistiques de la section « Notre impact » (le cahier exige des données vérifiées).
4. **Formulaire de contact** : brancher l'envoi réel dans `app/actions/contact.ts` (email via Resend/SMTP ou enregistrement Supabase).
5. **Logo officiel** : remplacer le monogramme `components/logo.tsx` par les fichiers SVG officiels (charte §6).
6. **Contenus** : faire valider services, solutions, projets, partenaires et actualités par KKS (marqueurs ⚠️ dans `lib/content/`).
7. **HTTPS** : déployer derrière un certificat SSL (§25).
8. **Analytics** : ajouter l'outil de mesure d'audience conforme à la réglementation (§30).

## Évolutions prévues

- **Multilingue** (§23) : architecture prête pour ajouter l'anglais (contenus centralisés dans `lib/`, prévoir `dictionaries/` + route `[lang]`).
- **CMS** (§27) : les tables `lib/content/*` peuvent être migrées vers Supabase avec le back-office `tiaw-admin`.
- **Services numériques** (§37) : portail santé, espace patient, prise de rendez-vous — l'architecture Next.js/Supabase commune le permet.
