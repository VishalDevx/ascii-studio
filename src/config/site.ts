const DEFAULT_SITE_URL = "http://localhost:3000";

const rawSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).trim();
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

const DEFAULT_GITHUB_REPO = "VishalDevx/ascii-studio";

const repo = (
  process.env.NEXT_PUBLIC_GITHUB_REPO ?? DEFAULT_GITHUB_REPO
).trim();

export const BRAND_LOGO_RADIUS_CLASS = "rounded-[10px] sm:rounded-[11px]";

export const SITE_CONFIG = {
  name: "ascii-studio",
  description:
    "Make ASCII move. Drop in a video or image and turn it into animated ASCII art, right in your browser.",
  url: siteUrl,
} as const;

export const siteConfig = {
  productName: "ascii-studio",
  siteName: "ascii-studio",
  logoPath: "/logo/logo.svg" as const,
  tagline: "Make ASCII move.",
  studioPath: "/studio",
  githubRepo: repo,
  githubUrl: `https://github.com/${repo}`,
  /** Primary GitHub CTA label (nav, hero, footer). */
  githubStarCtaLabel: "Star on GitHub" as const,
  githubApiStarsUrl: `https://api.github.com/repos/${repo}`,
  xUrl: "https://github.com/VishalDevx" as const,
  xHandle: "@VishalDevx" as const,
} as const;

export type SiteConfig = typeof siteConfig;
