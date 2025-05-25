import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'rgb(255, 255, 255)',
        mainDark: 'rgb(74, 72, 89)',
        background: {
          light: '#FFF5EA',
          DEFAULT: '#415662',
          dark: '#1F3547',
        },
        lightblue: 'rgb(204, 232, 255)',
        blue: 'rgb(96, 130, 182)',
        grey: 'rgb(153, 147, 178)',
        orange: 'rgb(251, 206, 177)',
        pink: 'rgb(255, 196, 219)',
        beige: 'rgb(255, 245, 234)',
        highlight: 'rgba(161, 199, 205, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
