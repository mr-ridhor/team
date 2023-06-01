/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'dark_bg':'#17254C',
        'light_blue':' #035fff',
        'dark_blue':'#05365c',
        'light_gray':'#8e96a3',
        'border_input':'#e0e0e080',
        'onfocus':'#0077b6',
      },
      backgroundColor:{
        'dark_bg':'#17254C',
        'dark_blue':'#05365c',
        'onfucos':'#0077b6',
        'border_input':'#e0e08080',
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      fontWeight:{
        xlight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        xlbold:'800',
      },
      screens:{
        'xlg':'1200px'
      }
    },
  },
  plugins: [],
}