/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif", "system-ui"],
      },
      colors: {
        appBlack: "#15161d",
        secoundryBlack: "#1e1f29",
        appRed: "#d10024",
        appGray: "#b9babc",
      },
    },
  },
  plugins: [],
};
