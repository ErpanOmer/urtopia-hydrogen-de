import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['urbane', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: '#fd4b17',
        blue: '#3b65eb'
      },
    },
  },
  plugins: [],
} satisfies Config

