/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Class: font-worksans (for general/clean text)
        'worksans': ['"Work Sans"', 'sans-serif'],
        
        // Class: font-montserrat (for accent/special text)
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
