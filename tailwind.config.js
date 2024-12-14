/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#2F2F2F', // Add your custom color
        lightGray: '#222222',
        lightGray1: '#6F6F6F',
        cpurple: '#9E5EFF',
        lightGray2: '#999696',
        borderGray: '#7B7B7B',
        sendGray : "#3C3B3B",
        GoogleCol: '#F6F6F6',

      },
      lineHeight: {
        '55': '55px', // Custom line-height value
        '60': '60px', // Another custom value if needed
        '70': '70px', // Add more custom values as needed
      },
    },
  },
  plugins: [],
}

