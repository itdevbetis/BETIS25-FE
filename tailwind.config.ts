import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        cinzel: ["var(--font-cinzel)"],
        openSans: ["var(--font-open-sans)"],
      },

      fontSize: {
        t1: "60px",
        t2: "48px",
        t3: "36px",
        t4: "30px",
        t5: "24px",
        t6: "20px",
        t7: "16px",
        t8: "14px",
      },
      colors: {
        background: "linear-gradient(180deg, #692597 0%, #220C31 100%)",
        foreground: "#FEF5FF",
        "magenta-50": "#f8ebf3",
        "magenta-100": "#e9c1d9",
        "magenta-150": "#eb92c9",
        "magenta-200": "#dea3c7",
        "magenta-300": "#cf79ae",
        "magenta-400": "#c5599e",
        "magenta-500": "#b73786",
        "magenta-600": "#a73273",
        "magenta-700": "#82275f",
        "magenta-800": "#651e4a",
        "magenta-900": "#4d1738",
        "magenta-button": "#8e2b8f",
        "magenta-button-hover": "#c55f9e",
        "magenta-button-active": "#a7327a",
        "violet-50": "#e6e9ee",
        "violet-100": "#cb9bc8",
        "violet-200": "#ab8bb2",
        "violet-300": "#84688f",
        "violet-400": "#6d4b79",
        "violet-500": "#481e58",
        "violet-600": "#421c50",
        "violet-700": "#33153e",
        "violet-800": "#281130",
        "violet-900": "#1e0d25",
        "violet-tooltip": "#692597",
        "violet-tooltip-darker": "#220c31",
        "red-50": "#f9e8e9",
        "red-100": "#ebb7bb",
        "red-200": "#e1949b",
        "red-300": "#d3636d",
        "red-400": "#cb4551",
        "red-500": "#be1625",
        "red-600": "#ad1422",
        "red-700": "#87101a",
        "red-800": "#690d18",
        "red-900": "#500910",
        "green-pastel-50": "#f6f9ef",
        "green-pastel-100": "#e2eec0",
        "green-pastel-200": "#d5e5b3",
        "green-pastel-300": "#c4d990",
        "green-pastel-400": "#b5d27b",
        "green-pastel-500": "#a3c75a",
        "green-pastel-600": "#94b552",
        "green-pastel-700": "#748440",
        "green-pastel-800": "#5a6d32",
        "green-pastel-900": "#445426",
        "yellow-50": "#fdf9ea",
        "yellow-100": "#f8ebbd",
        "yellow-200": "#f5e29d",
        "yellow-300": "#f1d570",
        "yellow-400": "#eecd55",
        "yellow-500": "#eca02a",
        "yellow-600": "#d5a726",
        "yellow-700": "#a8811e",
        "yellow-800": "#816a17",
        "yellow-900": "#625112",
        "tosca-light": "#eaf4f5",
        "tosca-light-hover": "#e0eef0",
        "tosca-light-active": "#bfdce1",
        "tosca-normal": "#308f9d",
        "tosca-normal-hover": "#2b818d",
        "tosca-normal-active": "#26727e",
        "tosca-dark": "#246b76",
        "tosca-dark-hover": "#1d5d68",
        "tosca-dark-active": "#164047",
        "tosca-darker": "#112337",
        "tosca-pagination": "#2a727c",
        "tosca-pagination-darker": "#1d565e",
        "tosca-foundation-darker": "#113237",
        "tosca-tabs-active": "#4b8297",
        "blue-tabs-active": "#2e388e",
        "neutral-50": "#fafafa",
        "neutral-100": "#efefef",
        "neutral-200": "#e8e8e8",
        "neutral-300": "#dddddd",
        "neutral-400": "#d6d6d6",
        "neutral-500": "#cccccc",
        "neutral-600": "#bababa",
        "neutral-700": "#919191",
        "neutral-800": "#707070",
        "neutral-900": "#565656",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
