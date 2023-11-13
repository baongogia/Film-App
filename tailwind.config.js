/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#141e27",
        main: "#c15c19",
        detail: "#141e27",
        opacity: "rgba(0, 0, 0, 0.5)",
        tx: '#eee'
      },
      spacing: {
        847: "847px",
      },
      boxShadow: {
        "3xl":
          "0px 16px 24px rgba(5, 2, 2, 0.832), 0px 16px 24px rgba(0, 0, 0, 0.8),0px 16px 24px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  variants: {},
  plugins: [],
};
