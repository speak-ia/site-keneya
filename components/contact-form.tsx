"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false };

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-kks-gray placeholder:text-kks-gray/40 focus:border-kks-green focus:ring-2 focus:ring-kks-green/20 focus:outline-none";

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-xs font-medium text-red-600">{errors[0]}</p>;
}

export function ContactForm({ defaultObjet = "" }: { defaultObjet?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-kks-green/30 bg-kks-green-light p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-kks-green" />
        <h3 className="mt-4 font-heading text-xl font-bold">Message envoyé !</h3>
        <p className="mt-2 text-sm text-kks-gray/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && !state.ok && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      {/* Honeypot anti-spam : invisible pour les humains */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="entreprise">Entreprise</label>
        <input type="text" id="entreprise" name="entreprise" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold">
            Nom et prénom <span className="text-kks-ocre">*</span>
          </label>
          <input id="nom" name="nom" required className={inputClass} placeholder="Aminata Traoré" />
          <FieldError errors={state.errors?.nom} />
        </div>
        <div>
          <label htmlFor="organisation" className="mb-1.5 block text-sm font-semibold">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            className={inputClass}
            placeholder="Hôpital, ONG, entreprise…"
          />
          <FieldError errors={state.errors?.organisation} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
            Email <span className="text-kks-ocre">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="vous@exemple.com"
          />
          <FieldError errors={state.errors?.email} />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1.5 block text-sm font-semibold">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            className={inputClass}
            placeholder="+223 …"
          />
          <FieldError errors={state.errors?.telephone} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pays" className="mb-1.5 block text-sm font-semibold">
            Pays
          </label>
          <input id="pays" name="pays" className={inputClass} placeholder="Mali" />
          <FieldError errors={state.errors?.pays} />
        </div>
        <div>
          <label htmlFor="objet" className="mb-1.5 block text-sm font-semibold">
            Objet <span className="text-kks-ocre">*</span>
          </label>
          <input
            id="objet"
            name="objet"
            required
            defaultValue={defaultObjet}
            className={inputClass}
            placeholder="Demande de démonstration, partenariat…"
          />
          <FieldError errors={state.errors?.objet} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message <span className="text-kks-ocre">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClass}
          placeholder="Décrivez votre besoin…"
        />
        <FieldError errors={state.errors?.message} />
      </div>

      <p className="text-xs leading-relaxed text-kks-gray/60">
        En envoyant ce formulaire, vous acceptez que vos informations soient utilisées uniquement
        pour traiter votre demande, conformément à notre{" "}
        <a href="/politique-de-confidentialite" className="underline">
          politique de confidentialité
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-kks-green px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}
