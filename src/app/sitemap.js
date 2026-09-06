const trimTrailingSlash = (value) => value?.replace(/\/+$/, "");
const SITE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_PORTFOLIO_URL || "http://localhost:3000",
);

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
