import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light1": "var(--primary-light1)",
        "primary-light2": "var(--primary-light2)",
        "primary-light3": "var(--primary-light3)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },

      fontFamily: {
        head: ["new_spiritmedium_condensed", "sans-serif"],
        body: ["new_spiritmedium_condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
