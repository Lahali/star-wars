/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      colors:{
        'black-t' : 'rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [require("daisyui")],
}
