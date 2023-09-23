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
        "app-orange": "#f9a826",
      },
      boxShadow: {
        "t-md":
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      animation: {
        "slide-from-top": "slide-from-top 0.3s ease-in-out",
        "slide-from-top-slow": "slide-from-top-slow 0.5s linear",
        "slide-from-left-slow": "slide-from-left-slow 0.5s linear",
        "slide-from-right-slow": "slide-from-right-slow 0.5s linear",
        "slide-from-bottom-slow": "slide-from-bottom-slow 0.5s linear",
      },
      keyframes: {
        "slide-from-top": {
          from: {
            transform: "translateY(-50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-from-top-slow": {
          from: {
            transform: "translateY(-10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-from-left-slow": {
          from: {
            transform: "translateX(-10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "slide-from-right-slow": {
          from: {
            transform: "translateX(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "slide-from-bottom-slow": {
          from: {
            transform: "translateY(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },

    },
  },
  plugins: [],
};
export default config;
