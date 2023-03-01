/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display: ['Poppins'],
      },
      colors:{
        'pink': "#E6425E",
        'violet': "#6A1B4D"
      },
      height:{
        'full': "75vh",
      },
    },
  },
  plugins: [],
}
