/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A8DADC',
          dark: '#457B9D',
        },
        secondary: {
          DEFAULT: '#E07A5F',
          light: '#F2CC8F',
        },
        accent: {
          lavender: '#C9ADA7',
          mint: '#95D5B2',
          cream: '#F8F5F0',
        },
        background: '#FEFEFE',
        text: {
          DEFAULT: '#4A4A4A',
          light: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cloud-float': 'cloud-float 20s ease-in-out infinite',
        'cloud-float-2': 'cloud-float 25s ease-in-out infinite',
        'cloud-float-3': 'cloud-float 30s ease-in-out infinite',
        'plane-fly': 'plane-fly 15s linear infinite',
        'stamp': 'stamp 0.3s ease-out',
      },
      keyframes: {
        'cloud-float': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(100px) translateY(-20px)' },
        },
        'plane-fly': {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '100%': { transform: 'translateX(100vw) translateY(-50px)' },
        },
        'stamp': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

