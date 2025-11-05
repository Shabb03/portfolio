import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Accomplishments from "./components/Accomplishments";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import { CustomCursor, ScrollProgress } from "./components/ui";
import { initializeConsoleEasterEggs } from "./utils/consoleEasterEggs";

const App: React.FC = () => {
  useEffect(() => {
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isMobile) {
      document.body.classList.add("custom-cursor-active");
    }

    initializeConsoleEasterEggs();

    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Accomplishments />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
};

export default App;
