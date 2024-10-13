import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cta: "#00C896",
        primary: "#1A1A1A",
        secondary: "#232323",
        "cta-active": "#00A380",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
