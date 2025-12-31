import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseLine: {
          "0%": { opacity: "0.25" },
          "50%": { opacity: "0.75" },
          "100%": { opacity: "0.25" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        pulseLine: "pulseLine 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
