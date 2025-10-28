/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: {
        light: '#93C5FD',  // Light blue
        DEFAULT: '#3B82F6', // Vibrant blue
        dark: '#1E40AF',    // Deep indigo-blue
      },
      accent: {
        pink: '#EC4899',
        purple: '#8B5CF6',
        teal: '#06B6D4',
      },
    },
    boxShadow: {
      glow: '0 0 20px rgba(59, 130, 246, 0.5)', // soft blue glow
    },
  },
},
  plugins: [],
}
