import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions } from "@/lib/content/solutions";
import { projets } from "@/lib/content/projets";
import { articles } from "@/lib/content/actualites";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projets", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/domaines", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/mali-international", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/actualites", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/partenaires", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/carriere", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
    {
      path: "/politique-de-confidentialite",
      priority: 0.2,
      changeFrequency: "yearly" as const,
    },
  ].map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const solutionPages = solutions.map((solution) => ({
    url: `${site.url}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projetPages = projets.map((projet) => ({
    url: `${site.url}/projets/${projet.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((article) => ({
    url: `${site.url}/actualites/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...solutionPages, ...projetPages, ...articlePages];
}
