import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-circuit-light flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-7xl font-extrabold text-kks-green">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold">Page introuvable</h1>
      <p className="mt-2 max-w-md text-kks-gray/70">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-kks-green px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-kks-green-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l'accueil
      </Link>
    </div>
  );
}
