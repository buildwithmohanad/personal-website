module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        text: "#0A0B0A",
        background: "#FCFDFC",
        primary: "#373B3E",
        secondary: "#EDEEEC",
        accent: "#3E373B"
      }
    },
    goldenRatio: {
      prefix: true,
      spacerUnit: "rem",
      spacerBase: 1.5,
      useCssVars: true
    }
  },
  plugins: [require("tailwindcss-golden-ratio")]
};
