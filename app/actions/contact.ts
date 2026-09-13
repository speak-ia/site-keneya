"use server";

import { z } from "zod";

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

const contactSchema = z.object({
  nom: z.string().trim().min(2, "Veuillez indiquer votre nom et prénom.").max(120),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Adresse email invalide.").max(160),
  telephone: z.string().trim().max(30).optional().or(z.literal("")),
  pays: z.string().trim().max(80).optional().or(z.literal("")),
  objet: z.string().trim().min(2, "Veuillez indiquer l'objet de votre demande.").max(160),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(5000),
  // Honeypot anti-spam (§25 : protection contre les formulaires automatisés)
  entreprise: z.string().max(0).optional().or(z.literal("")),
});

/**
 * Traite le formulaire de contact.
 * TODO(prod) : brancher l'envoi d'email (ex. Resend) ou l'enregistrement
 * dans Supabase pour garantir la réception des demandes.
 */
export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Merci de corriger les champs indiqués.",
    };
  }

  // Honeypot rempli → bot : on fait semblant de réussir sans rien enregistrer.
  if (parsed.data.entreprise) {
    return { ok: true, message: "Votre demande a bien été envoyée." };
  }

  console.info("[contact] Nouvelle demande reçue :", {
    nom: parsed.data.nom,
    email: parsed.data.email,
    objet: parsed.data.objet,
  });

  return {
    ok: true,
    message:
      "Votre demande a bien été envoyée. L'équipe KKS vous répondra dans les meilleurs délais.",
  };
}
