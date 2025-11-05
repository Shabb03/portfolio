export const NAVIGATION_SECTIONS = [
  "home",
  "experience",
  "skills",
  "projects",
  "accomplishments",
  "hobbies",
] as const;

export type NavigationSection = (typeof NAVIGATION_SECTIONS)[number];

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "accomplishments", label: "Accomplishments" },
  { id: "hobbies", label: "Hobbies" },
] as const;
