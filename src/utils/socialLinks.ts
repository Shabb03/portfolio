import { SocialLink } from "../types";
import homeData from "../data/home.json";

export const getSocialLinks = (): SocialLink[] => [
  {
    name: "GitHub",
    url: homeData.links.github,
    icon: "💻",
  },
  {
    name: "LinkedIn",
    url: homeData.links.linkedin,
    icon: "💼",
  },
];

export const getExtendedSocialLinks = (): SocialLink[] => [...getSocialLinks()];
