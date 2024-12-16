/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
      },
      colors: {
        'auction-blue': {
          50: '#EFF6FF',
          600: '#2563EB',
          800: '#1E40AF',
        },
        'auction-green': {
          50: '#ECFDF5',
          600: '#10B981',
          700: '#047857',
        },
      },
    },
  },
  plugins: [],
}
