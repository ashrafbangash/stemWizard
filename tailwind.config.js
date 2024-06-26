/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:'#F65B35',
        orangish:'#FFF1CF',
        textblack:'#333333',
        red:'#FF4040',
        green:'#0EC167',
        gray:'#f3f4f6',
        pink:'#ED1566',
        blue:'#413ADA',
        yellow:'#F8C853',
        redish:'#FFECE8',
        redishdark:'#FFE1DB',
        fb:'#1677F0',
        link:'#2967B0',
        wa:'#01E311',
        yt:'#FF0109',
        redishLight:'#FFF9EB',
        primary: {
          DEFAULT:'#a259ff',
          dark:'#cc147f'
        },
        secondary: {
          DEFAULT:'#000000',
          light:'#555555F2'
        }
      },

      maxWidth: {
        'screen-3xl': '1750px', // Set the maximum width for the screen to 1750px
      },
      screens: {
        'max-screen': '1920px',
        'min-screen': '1200px',
      },
    },
  },
  plugins: [],
};
