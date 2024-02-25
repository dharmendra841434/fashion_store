/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif", "system-ui"],
      },
      colors: {
        appBlack: "#15161d",
        secoundryBlack: "#1e1f29",
        appRed: "#D10024e6",
        appGray: "#b9babc",
      },
      boxShadow: {
        dpShadow: "0px 4px 17px -4px rgba(0,0,0,0.2)",
        boxShadow1: "0px 0px 44px 14px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
