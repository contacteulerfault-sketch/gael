export const PROJECT_1_URL = process.env.NEXT_PUBLIC_PROJECT_1_URL;
export const PROJECT_1_GITHUB = process.env.NEXT_PUBLIC_PROJECT_1_GITHUB;
export const PROJECT_2_URL = process.env.NEXT_PUBLIC_PROJECT_2_URL;
export const PROJECT_2_GITHUB = process.env.NEXT_PUBLIC_PROJECT_2_GITHUB;
export const PROJECT_3_URL = process.env.NEXT_PUBLIC_PROJECT_3_URL;
export const PROJECT_3_GITHUB = process.env.NEXT_PUBLIC_PROJECT_3_GITHUB;
export const PROJECT_4_URL = process.env.NEXT_PUBLIC_PROJECT_4_URL;
export const PROJECT_4_GITHUB = process.env.NEXT_PUBLIC_PROJECT_4_GITHUB;
export const OWNER_NAME = "Gael Alves";
export const OWNER_FIRST_NAME = "Gael";
export const OWNER_LOCATION = "Rio de Janeiro, Brazil";
export const OWNER_COUNTRY = "Brazil";
export const OWNER_TIMEZONE = "America/Sao_Paulo";
export const OWNER_TIMEZONE_LABEL = "Rio de Janeiro, Brazil (GMT-3)";
export const OWNER_BIO = "Full-Stack Developer | Shopify, WordPress, WooCommerce, React & Next.js";
export const PORTFOLIO_APP_NAME = `${OWNER_FIRST_NAME}'s Portfolio`;

export const GITHUB_PROFILE =
  process.env.NEXT_PUBLIC_GITHUB_PROFILE || "https://github.com/gaelalves.business-ops";
export const GITHUB_USERNAME = GITHUB_PROFILE
  ? GITHUB_PROFILE.replace(/\/+$/, "").split("/").pop()
  : "";
export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/gael-alves";

export const PORTFOLIO_URL = process.env.NEXT_PUBLIC_PORTFOLIO_URL || "";
export const PORTFOLIO_ALT_URL = process.env.NEXT_PUBLIC_PORTFOLIO_ALT_URL || "";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "gaelalves.business@gmail.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "+1 (986) 273-4637";
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  (PHONE ? `https://wa.me/${PHONE.replace(/\D/g, "")}` : "");
export const OWNER_AVATAR = "/images/owner-avatar.webp";
export const RESUME_FILE = "/files/resume.pdf?v=20260919";

export const getOwnerPublicProfile = () => ({
  name: OWNER_NAME,
  login: GITHUB_USERNAME,
  email: EMAIL,
  phone: PHONE,
  bio: OWNER_BIO,
  location: OWNER_LOCATION,
  html_url: GITHUB_PROFILE || "",
  public_repos: null,
  followers: null,
  following: null,
});
