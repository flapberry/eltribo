/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      colors: {
        greenB: "#1A5319",
        baseBg: '#F1FFF9',
        Red: 'rgb(255, 0, 0)'
      },
      fontFamily: {
        pMedium: ['Poppins-Medium'],
        pRegular: ['Poppins-Regular'],
        pacifico: ['Pacifico']
      }
    },
  },
  plugins: [],
};
