/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary_color: '#00b4ef',
        secondary_color: 'fbfbfb',
      }
    },
  },
  plugins: [],
}

