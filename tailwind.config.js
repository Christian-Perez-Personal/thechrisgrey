/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'altivum': {
          'dark': '#0A0F1C',
          'navy': '#1A2332',
          'blue': '#2E4A6B',
          'slate': '#4A5A73',
          'silver': '#9BA6B8',
          'gold': '#C5A572',
        },
      },
    },
  },
  plugins: [],
}
