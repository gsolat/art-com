/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",         // Escanea archivos HTML en la raíz del proyecto
    "./**/*.html",      // Escanea HTML en subcarpetas
    // Si tienes JS que añade clases dinámicamente, añádelas aquí:
    // "./src/**/*.js",
  ],
  theme: {  
    extend: {},
  },
  plugins: [require('daisyui')],
}

