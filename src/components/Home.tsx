import React from "react";
import "../styles/Home.css";
import homeData from "../data/home.json";
import { useScrollTo, useScrollAnimationWithClass } from "../hooks";
import { UI_TEXT } from "../utils";
import {
  CodeSnippet,
  CTAButtons,
  ParallaxBackground,
  ParallaxContainer,
} from "./ui";

const Home: React.FC = () => {
  const { scrollToSection } = useScrollTo();
  const { ref: contentRef, animationClass: contentAnimation } =
    useScrollAnimationWithClass("slideUp");
  const { ref: visualRef, animationClass: visualAnimation } =
    useScrollAnimationWithClass("slideLeft");

  return (
    <section id="home" className="home-section">
      <ParallaxBackground variant="code-rain" />
      <ParallaxBackground variant="geometry" />

      <div className="home-container section-container">
        <ParallaxContainer speed={0.8} direction="up">
          <div ref={contentRef} className={`hero-content ${contentAnimation}`}>
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="text-highlight">{UI_TEXT.HELLO_TEXT}</span>
                <br />
                <span className="name-text">{homeData.name}</span>
              </h1>
              <h2 className="hero-subtitle">{homeData.subtitle}</h2>
              <p className="hero-description">{homeData.aboutMe}</p>
            </div>
            <CTAButtons />
          </div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.5} direction="down">
          <div ref={visualRef} className={`hero-visual ${visualAnimation}`}>
            <CodeSnippet name={homeData.name} role="Product Engineer" />
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
};

export default Home;
