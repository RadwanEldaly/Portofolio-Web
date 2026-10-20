import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        mat: "#EAE6DD",
        ink: "#171717",
        muted: "#68655F",
        line: "#68655F",
        accent: "#171717",
      },
      fontFamily: {
        display: ["var(--font-inter-tight)", "sans-serif"],
        body: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wide2: "0.2em",
      },
      screens: {
        xs: "480px",
      },
      maxWidth: {
        "screen-xl": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
