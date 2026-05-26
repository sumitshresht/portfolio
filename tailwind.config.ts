import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0a0a0c",
        surface: "#121215",
        "surface-raised": "#1a1a1e",
        magic: {
          glow: "#D4AF37", // Warm golden light
          dim: "#4A3B1B",
        }
      },
      boxShadow: {
        'neu-dark': '8px 8px 16px #060608, -8px -8px 16px #1e1e24',
        'neu-inset': 'inset 4px 4px 8px #060608, inset -4px -4px 8px #1e1e24',
        'magic-bloom': '0 0 40px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05)',
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'dust': 'dust 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dust: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};
export default config;