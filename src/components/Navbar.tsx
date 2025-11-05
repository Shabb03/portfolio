import React from "react";
import "../styles/Navbar.css";
import { useScrollTo, useActiveSection, useMobileMenu } from "../hooks";
import { NAVIGATION_ITEMS, UI_TEXT } from "../utils";

const Navbar: React.FC = () => {
  const activeSection = useActiveSection();
  const { scrollToSection } = useScrollTo();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">{UI_TEXT.LOGO}</span>
        </div>
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={UI_TEXT.TOGGLE_MOBILE_MENU}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => handleScrollToSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
