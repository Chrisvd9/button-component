/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto: ["Noto Sans JP", "Sans-serif"],
      ubuntu: ["Ubuntu Mono", "monospace"],
      poppins: ["Poppins", "Sans-serif"],
      monserrat: ["Montserrat", "Sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
