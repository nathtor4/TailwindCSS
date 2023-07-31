/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'], // Definindo 'Lato' como a fonte padrão
    },
    extend: {
      colors: {
          padrao:{
            azul: '#000039',
            hover: '#44a4e4ea',
            contraste: '#F5EFE6'
          }
      }
    }
  },
  plugins: [],
}
