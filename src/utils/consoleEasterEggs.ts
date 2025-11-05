// Console Easter Eggs for curious developers 🕵️‍♂️

const consoleStyles = {
  title:
    "color: #00ff88; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ff88;",
  subtitle: "color: #4ff3ff; font-size: 16px; font-weight: bold;",
  text: "color: #ffffff; font-size: 14px;",
  accent: "color: #00d4ff; font-size: 14px; font-weight: bold;",
  warning: "color: #ff6b6b; font-size: 12px;",
  code: 'background: #1a1a1a; color: #00ff88; padding: 8px; border-radius: 4px; font-family: "Courier New", monospace;',
  matrix:
    'color: #00ff41; font-family: "Courier New", monospace; font-size: 12px;',
};

const matrixCode = `
    01001000 01100101 01101100 01101100 01101111
    00100000 01000100 01100101 01110110 01100101
    01101100 01101111 01110000 01100101 01110010
`;

const secretCommands = {
  konami: "↑ ↑ ↓ ↓ ← → ← → B A",
  matrix: 'Type "matrix()" to enter the Matrix',
  coffee: 'Type "portfolio.coffee()" for a surprise',
};

let konamiSequence: string[] = [];
let lastKeyTime = 0;
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const initializeConsoleEasterEggs = () => {
  console.log("%c👋 Hey there, fellow developer!", consoleStyles.title);
  console.log(
    "%cWelcome to the source code of my portfolio!",
    consoleStyles.subtitle
  );
  console.log(
    "%cI see you're curious about how things work under the hood... 🔍",
    consoleStyles.text
  );

  console.log("\n%c🎮 Secret Commands:", consoleStyles.accent);
  Object.entries(secretCommands).forEach(([key, value]) => {
    console.log(`%c• ${value}`, consoleStyles.text);
  });

  console.log("\n%c" + matrixCode, consoleStyles.matrix);
  console.log("%c⚡ Happy exploring! - Shab", consoleStyles.accent);

  (window as any).portfolio = {
    stats: () => {
      console.clear();
      console.log("%c📊 Portfolio Statistics", consoleStyles.title);
      console.log(`%c• Components: ${getComponentCount()}`, consoleStyles.text);
      console.log(`%c• Custom Hooks: ${getHookCount()}`, consoleStyles.text);
      console.log(
        `%c• Lines of Code: ~${estimateLineCount()}`,
        consoleStyles.text
      );
      console.log(`%c• Coffee consumed: ∞ ☕`, consoleStyles.text);
      console.log(`%c• Load time: ${getLoadTime()}ms`, consoleStyles.text);
      console.log(`%c• Device: ${getDeviceInfo()}`, consoleStyles.text);
    },

    hire: () => {
      console.clear();
      console.log("%c💼 Let's work together!", consoleStyles.title);
      console.log(
        "%cI'm always open to discussing new opportunities.",
        consoleStyles.subtitle
      );
      console.log(
        "%c📧 Email: Available on my GitHub profile",
        consoleStyles.text
      );
      console.log(
        "%c💼 LinkedIn: Check the footer for the link",
        consoleStyles.text
      );
      console.log("%c💻 GitHub: Same place!", consoleStyles.text);
      console.log(
        "\n%c🚀 Let's build something amazing together!",
        consoleStyles.accent
      );
    },

    coffee: () => {
      console.clear();
      const coffeeArt = `
        ☕ Coffee Status: CRITICAL LOW ☕
        
             )  (
            (   ) )
             ) ( (
           ────────
          ╱        ╲
         ╱  ☕ JAVA  ╲
        ╱____________╲
        
        "Code is poetry, coffee is fuel" ✨
      `;
      console.log("%c" + coffeeArt, consoleStyles.code);
      console.log(
        "%cFun fact: This portfolio was built on approximately 47 cups of coffee! ☕",
        consoleStyles.text
      );
    },

    theme: (colorName?: string) => {
      if (!colorName) {
        console.log("%c🎨 Available theme commands:", consoleStyles.accent);
        console.log(
          '%c• portfolio.theme("matrix") - Green Matrix theme',
          consoleStyles.text
        );
        console.log(
          '%c• portfolio.theme("cyber") - Cyan cyberpunk theme',
          consoleStyles.text
        );
        console.log(
          '%c• portfolio.theme("reset") - Back to normal',
          consoleStyles.text
        );
        return;
      }

      const root = document.documentElement;
      switch (colorName.toLowerCase()) {
        case "matrix":
          root.style.setProperty("--color-cursor-primary", "#00ff41");
          root.style.setProperty("--color-accent-secondary", "#00ff41");
          console.log(
            "%c🟢 Matrix theme activated! Welcome to the Matrix...",
            consoleStyles.matrix
          );
          break;
        case "cyber":
          root.style.setProperty("--color-cursor-primary", "#ff00ff");
          root.style.setProperty("--color-accent-secondary", "#00ffff");
          console.log(
            "%c💜 Cyberpunk theme activated! Future is now...",
            "color: #ff00ff; font-weight: bold;"
          );
          break;
        case "reset":
          root.style.setProperty("--color-cursor-primary", "#00ff88");
          root.style.setProperty("--color-accent-secondary", "#4ff3ff");
          console.log("%c✅ Theme reset to default!", consoleStyles.accent);
          break;
        default:
          console.log(
            '%c❌ Unknown theme. Try "matrix", "cyber", or "reset"',
            consoleStyles.warning
          );
      }
    },
  };

  (window as any).matrix = () => {
    console.clear();
    const matrix = `
    ╔═══════════════ MATRIX MODE ═══════════════╗
    ║                                           ║
    ║  "There is no spoon... but there is code" ║
    ║                                           ║
    ║  01001000 01100101 01101100 01101100 01101111 ║
    ║  01010111 01101111 01110010 01101100 01100100 ║
    ║                                           ║
    ║  You are the One... at debugging! 🐛      ║
    ╚═══════════════════════════════════════════╝
    `;
    console.log("%c" + matrix, consoleStyles.matrix);
    console.log(
      "%cWelcome to the Matrix, Neo. 🕶️",
      "color: #00ff41; font-size: 18px; font-weight: bold;"
    );
  };

  document.addEventListener("keydown", (e) => {
    if (e.repeat) return;

    const now = Date.now();
    if (now - lastKeyTime < 100) return;
    lastKeyTime = now;

    if (
      ![
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "KeyB",
        "KeyA",
      ].includes(e.code)
    ) {
      return;
    }

    konamiSequence.push(e.code);
    if (konamiSequence.length > konamiCode.length) {
      konamiSequence.shift();
    }

    if (konamiSequence.join(",") === konamiCode.join(",")) {
      console.clear();
      console.log(
        "%c🎮 KONAMI CODE ACTIVATED! 🎮",
        "color: #ff6b6b; font-size: 32px; font-weight: bold; text-shadow: 0 0 20px #ff6b6b;"
      );
      console.log(
        "%c🎉 You found the secret! Here's a cookie: 🍪",
        consoleStyles.title
      );
      console.log("%cYou're officially a legend! 🏆", consoleStyles.accent);

      document.body.style.animation = "rainbow 2s ease-in-out";
      setTimeout(() => {
        document.body.style.animation = "";
      }, 2000);

      konamiSequence = [];
    }
  });
};

const getComponentCount = (): number => {
  return document.querySelectorAll('[class*="component"], [class*="section"]')
    .length;
};

const getHookCount = (): number => {
  return 8;
};

const estimateLineCount = (): number => {
  return 2500;
};

const getLoadTime = (): number => {
  return Math.round(performance.now());
};

const getDeviceInfo = (): string => {
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  if (isMobile) return `📱 Mobile (${width}px)`;
  if (isTablet) return `📟 Tablet (${width}px)`;
  if (isDesktop) return `🖥️ Desktop (${width}px)`;
  return `🖥️ Unknown (${width}px)`;
};

const style = document.createElement("style");
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    25% { filter: hue-rotate(90deg); }
    50% { filter: hue-rotate(180deg); }
    75% { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);
