/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'desktop':  '900px',
      'nothing': '0px'
    },
    fontFamily: {
      'fira-code': ['Fira Code', 'sans-serif'],
    },
    backgroundSize: {
      'body': '100% 120vh'  ,
      'cover': 'cover',
      'contain': 'contain',
      'center': 'center'
    },
    extend: {
      backgroundImage: {
        'portal': "url('public/bg/portal.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      
    },
  },
  plugins: [],
}