/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#ff2d2d' // your accent red, change if you want
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: [],
}
