export const generateMetaTitle = (
  pageTitle?: string,
  suffix = "Rishab Sidhu - Product Engineer"
) => {
  return pageTitle ? `${pageTitle} | ${suffix}` : suffix;
};

export const generateMetaDescription = (content: string, maxLength = 160) => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3).trim() + "...";
};

export const generateKeywords = (
  skills: string[],
  additionalKeywords: string[] = []
) => {
  const defaultKeywords = [
    "Product Engineer",
    "Full Stack Developer",
    "Web Development",
    "Software Engineer",
    "Rishab Sidhu",
    "Shab",
    "Portfolio",
  ];

  return [...defaultKeywords, ...skills, ...additionalKeywords].join(", ");
};

export const generateStructuredData = (
  type: "Person" | "WebSite" = "Person",
  data: any
) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
  };

  if (type === "Person") {
    return {
      ...baseSchema,
      name: data.name,
      alternateName: data.alternateName,
      jobTitle: data.jobTitle,
      description: data.description,
      url: data.url,
      image: data.image,
      sameAs: data.sameAs,
      knowsAbout: data.knowsAbout,
      hasOccupation: {
        "@type": "Occupation",
        name: data.jobTitle,
        description: data.occupationDescription,
      },
    };
  }

  if (type === "WebSite") {
    return {
      ...baseSchema,
      name: data.name,
      alternateName: data.alternateName,
      url: data.url,
      description: data.description,
      author: {
        "@type": "Person",
        name: data.authorName,
      },
    };
  }

  return baseSchema;
};

export const generateOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  format: "webp" | "avif" | "jpg" | "png" = "webp"
) => {
  return src;
};

export const generateImageSrcSet = (
  baseSrc: string,
  sizes: number[] = [400, 800, 1200]
) => {
  return sizes
    .map((size) => `${generateOptimizedImageUrl(baseSrc, size)} ${size}w`)
    .join(", ");
};

export const createBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
};

export const createWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  author: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    author: {
      "@type": "Person",
      name: page.author,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Rishab Sidhu Portfolio",
      url: "https://rishabsidhu.dev",
    },
  };
};
