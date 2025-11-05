import { Project } from "../types";

export const filterFeaturedProjects = (projects: Project[]): Project[] =>
  projects.filter((project) => project.featured);

export const filterOtherProjects = (projects: Project[]): Project[] =>
  projects.filter((project) => !project.featured);

export const sortProjectsByFeatured = (projects: Project[]) => ({
  featured: filterFeaturedProjects(projects),
  other: filterOtherProjects(projects),
});
