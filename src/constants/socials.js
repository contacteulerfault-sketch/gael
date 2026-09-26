import { GITHUB_PROFILE, LINKEDIN_URL, PORTFOLIO_URL, WHATSAPP_URL } from "./env";

export const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: GITHUB_PROFILE,
    img: "/images/github.webp",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: LINKEDIN_URL,
    img: "/images/linkedin.webp",
  },
  {
    id: 3,
    text: "WhatsApp",
    icon: "/icons/whatsapp.svg",
    bg: "#25d366",
    link: WHATSAPP_URL,
    img: "/icons/whatsapp.svg",
  },
  {
    id: 4,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: PORTFOLIO_URL,
    img: "/images/portfolio.webp",
  },
];
