/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        twitter: 'blue'
      },
      spacing: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [],
}

