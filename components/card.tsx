import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-7 shadow-sm ${
        hover ? "transition-all hover:-translate-y-1 hover:border-kks-green/30 hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardLinkFooter({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-kks-green transition-colors hover:text-kks-ocre"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
