/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        green: {
          700: '#1e5631', // Dark forest green to match logo
          800: '#164023',
          600: '#2d8659',
        },
      },
    },
  },
  plugins: [],
}

