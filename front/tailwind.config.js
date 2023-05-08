/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#70D6FF',
        customPink: '#FF70A6',
        customOrange: '#FF9770',
        customAmber: '#FFD670',
        customYellow: '#E9FF70',
        
      },
    },
  },
  plugins: [],
}