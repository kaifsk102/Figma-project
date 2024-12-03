/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: { 'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 86.13%, #FFFFFF 100%)', },
      fontFamily: {  
        'another-font': ['AnotherFont', 'sans-serif'],
      'gilroy': ['Gilroy', 'sans-serif'], },
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
