/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    fontFamily: {
      'Font-Lora': ['Lora', 'serif'],
      'Font-Play': ['Playfair Display', 'serif'],
      'Font-Nunito' : ['Nunito Sans', 'sans-serif']
    },
  },
  plugins: [require("daisyui")],
};

