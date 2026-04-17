/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B35',
        secondary: '#004E89',
        accent: '#F77F00',
        dark: '#0A0E27',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
