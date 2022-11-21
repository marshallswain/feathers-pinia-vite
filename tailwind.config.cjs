/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/daisy-ui-kit/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
