import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/** Logo officiel KKS. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — Accueil`}>
      <Image
        src="/logo.jpeg"
        alt={site.name}
        width={1080}
        height={1080}
        priority
        className="h-14 w-auto rounded-md object-contain"
      />
    </Link>
  );
}
