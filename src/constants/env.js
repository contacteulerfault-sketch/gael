export const PROJECT_1_URL = process.env.NEXT_PUBLIC_PROJECT_1_URL;
export const PROJECT_1_GITHUB = process.env.NEXT_PUBLIC_PROJECT_1_GITHUB;
export const PROJECT_2_URL = process.env.NEXT_PUBLIC_PROJECT_2_URL;
export const PROJECT_2_GITHUB = process.env.NEXT_PUBLIC_PROJECT_2_GITHUB;
export const PROJECT_3_URL = process.env.NEXT_PUBLIC_PROJECT_3_URL;
export const PROJECT_3_GITHUB = process.env.NEXT_PUBLIC_PROJECT_3_GITHUB;
export const PROJECT_4_URL = process.env.NEXT_PUBLIC_PROJECT_4_URL;
export const PROJECT_4_GITHUB = process.env.NEXT_PUBLIC_PROJECT_4_GITHUB;
export const OWNER_NAME = "Euler William Robert";
export const OWNER_FIRST_NAME = "Euler";
export const OWNER_LOCATION = "United Kingdom";
export const OWNER_TIMEZONE = "Europe/London";
export const OWNER_TIMEZONE_LABEL = "London, United Kingdom (GMT/BST)";
export const OWNER_BIO = "Full-Stack Developer | Shopify, WordPress, WooCommerce, React & Next.js";

export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE;
export const GITHUB_USERNAME = GITHUB_PROFILE
  ? GITHUB_PROFILE.replace(/\/+$/, "").split("/").pop()
  : "";

export const PORTFOLIO_URL = process.env.NEXT_PUBLIC_PORTFOLIO_URL || "";
export const PORTFOLIO_ALT_URL = process.env.NEXT_PUBLIC_PORTFOLIO_ALT_URL || "";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "contacteulerfault@gmail.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "";
export const OWNER_AVATAR = "/images/owner-avatar.webp";
export const RESUME_FILE = "/files/resume.pdf?v=20260906";

export const getOwnerPublicProfile = () => ({
  name: OWNER_NAME,
  login: GITHUB_USERNAME,
  email: EMAIL,
  bio: OWNER_BIO,
  location: OWNER_LOCATION,
  html_url: GITHUB_PROFILE || "",
  public_repos: null,
  followers: null,
  following: null,
});
