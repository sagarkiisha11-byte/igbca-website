import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FFF8EF",
          200: "#F6E7D0",
          300: "#E9C9A0",
          400: "#E3C8A4",
          500: "#D4B184",
          DEFAULT: "#FFF8EF",
        },
        sand: {
          50: "#FCF6ED",
          100: "#F6E7D0",
          200: "#ECD7BA",
          DEFAULT: "#F6E7D0",
        },
        caramel: {
          DEFAULT: "#E9C9A0",
          100: "#F4DFBF",
          200: "#E9C9A0",
          300: "#D6B07F",
        },
        ink: {
          DEFAULT: "#3B2314",
          soft: "#5A3A25",
          muted: "#7A563D",
        },
        "gold-deep": "#A8791F",
        espresso: {
          800: "#361E14",
          900: "#2B1810",
          950: "#1A0F0A",
          DEFAULT: "#2B1810",
        },
        chocolate: {
          600: "#5E3821",
          700: "#4A2C1A",
          800: "#3D2314",
          DEFAULT: "#4A2C1A",
        },
        gold: {
          300: "#EED7A1",
          400: "#DFB15B",
          500: "#C8963E",
          600: "#B38230",
          700: "#8F6623",
          DEFAULT: "#C8963E",
        },
        blush: {
          100: "#FAF0EC",
          200: "#F3D9CF",
          300: "#E8BEAF",
          DEFAULT: "#F3D9CF",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(43, 24, 16, 0.08)",
        "luxury-lg": "0 25px 50px -12px rgba(43, 24, 16, 0.16)",
        "gold-glow": "0 0 25px rgba(200, 150, 62, 0.35)",
        "dark-card": "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

