"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, navMoreItems, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-kks-green ${
      pathname === href ? "text-kks-green" : "text-kks-gray"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((open) => !open)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-kks-gray transition-colors hover:text-kks-green"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              Plus
              <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-1 w-60 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                {navMoreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-kks-gray hover:bg-kks-green-light hover:text-kks-green"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-kks-green px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-kks-green-dark"
          >
            Nous contacter
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-kks-gray lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white lg:hidden" aria-label="Navigation mobile">
          <div className="space-y-1 px-4 py-4">
            {[...navItems, ...navMoreItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === item.href
                    ? "bg-kks-green-light text-kks-green"
                    : "text-kks-gray hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-kks-green px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Nous contacter
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
