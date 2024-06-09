/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Outfit',
        handwriting: 'cursive'
      },
      colors: {
        background: 'rgba(var(--background))',
        foreground: 'rgba(var(--foreground))',
        "fade-foreground": 'rgba(var(--fade-foreground))',
        border: 'rgba(var(--border))',
        accent: 'rgba(var(--accent))',
        "hover-bg": 'rgba(var(--hover-bg))'
      }
    },
  },
  plugins: [],
}