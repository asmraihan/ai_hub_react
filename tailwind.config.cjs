/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9544e5",
        
"secondary": "#70eae4",
        
"accent": "#c1c1ff",
        
"neutral": "#2E2640",
        
"base-100": "#FCFCFD",
        
"info": "#85CEE0",
        
"success": "#55DDB7",
        
"warning": "#EFC761",
        
"error": "#FA143E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
