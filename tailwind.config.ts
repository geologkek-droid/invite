import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6eddc",
        ink: "#163626",
        leaf: "#214c37",
        rose: "#b94f5d",
        ribbon: "#d79a9f",
        butter: "#fff7e6"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        hand: ["Bradley Hand", "Segoe Print", "Comic Sans MS", "cursive"],
        body: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        paper: "0 18px 45px rgba(67, 47, 30, 0.16)",
        sticker: "0 10px 24px rgba(58, 40, 25, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
