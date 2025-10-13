/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Class: font-playfair (for headings/main text)
        'playfair': ['"Playfair Display"', 'serif'],
        
        // Class: font-raleway (for body/sub text)
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}