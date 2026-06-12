import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-hover": "#161616",
        border: "#222222",
        bitcoin: {
          DEFAULT: "#F7931A",
          dark: "#d97e0f",
          light: "#ffae4d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "grid-fade": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(247,147,26,0.4), 0 8px 30px -8px rgba(247,147,26,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
