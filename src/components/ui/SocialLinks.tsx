import React from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className = "social-links",
}) => {
  return (
    <div className={className}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="social-link"
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon" aria-hidden="true">
            {link.icon}
          </span>
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
