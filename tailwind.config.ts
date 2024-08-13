import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        padding: {
          DEFAULT: '1rem', // Padding predefinito per tutti i dispositivi
          sm: '1.5rem',    // Piccoli dispositivi (smartphone)
          md: '2rem',      // Dispositivi medi (tablet)
          lg: '3rem',      // Grandi dispositivi (laptop)
          xl: '4rem',      // Extra grandi dispositivi (desktop)
          '2xl': '5rem',   // Dispositivi molto grandi (grandi schermi)
        },
      },
    },
  },
  plugins: [],
};
export default config;
