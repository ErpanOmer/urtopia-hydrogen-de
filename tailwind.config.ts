import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '1024px',
      lg: '1220px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#fd4b17',
      blue: '#3b65eb'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
} satisfies Config

