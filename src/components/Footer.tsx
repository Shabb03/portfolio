import React from "react";
import "../styles/Footer.css";
import homeData from "../data/home.json";
import { SocialLinks, BackToTopButton } from "./ui";
import { getSocialLinks, UI_TEXT } from "../utils";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = getSocialLinks();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{UI_TEXT.FOOTER_TITLE}</h3>
            <p className="footer-description">{UI_TEXT.FOOTER_DESCRIPTION}</p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              &copy; {currentYear} {homeData.fullName}.{" "}
              {UI_TEXT.FOOTER_COPYRIGHT}
            </p>
          </div>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
