import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0rem", // Adjust padding to remove extra space
    },
    extend: {
      colors: {
        primary: "#C97918",
        "primary-content": "#ffffff",
        secondary: "#FEFAF0",
        "secondary-content": "#000000",
        tertiary: "#f5dab7",
        "tertiary-content": "#000000",
        neutral: "#1f2937",
        "neutral-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#dedad4",
        "base-300": "#bebab5",
        "base-content": "#1f2937",
        info: "#00a4ff",
        "info-content": "#ffffff",
        success: "#00cb02",
        "success-content": "#ffffff",
        warning: "#ff8300",
        "warning-content": "#ffffff",
        error: "#ef4444",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
