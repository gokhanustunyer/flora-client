/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gnb-green': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5cc',
          300: '#8dd3a8',
          400: '#5bb87f',
          500: '#3a9d65',
          600: '#2d7d51',
          700: '#276442',
          800: '#235037',
          900: '#1f4230',
        },
        'gnb-beige': {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf7f3',
          300: '#f5efe7',
          400: '#ede3d6',
          500: '#e2d4c2',
          600: '#d1c0a8',
          700: '#b8a589',
          800: '#9a8a6f',
          900: '#7e725c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
} 