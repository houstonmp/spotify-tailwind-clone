/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1ed760',
        'spotify-dark-gray': '#222326',
        'spotify-light-blue': '#1d75de',
        'spotify-btn-blue': '#1a69c7',
        'spotify-light-black': '#191414',
        'spotify-bg-gray': '#efefef'
      },
      backgroundImage: {
        'notes': "url('/src/assets/img/music-notes.png')",
        'music': "url('/src/assets/img/music.png')",
        'phone-skips': "url('/src/assets/img/phone-skips.png')",
        'phone': "url('/src/assets/img/phone.png')",
      },
      maxWidth: {
        '400': '400px',
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
}

