/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#00000",
      digeizPink: "#F20574",
      digeizPurple: "#6805F2",
      digeizGreen: "#80F29D",
      digeizBrown: "#F2A35E",
      digeizOrange: "#F2541B"
    }
  },
  plugins: [],
}
