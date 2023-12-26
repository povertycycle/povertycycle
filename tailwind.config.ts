import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        'rain': '#A1C6CC',
        'sea-green': '#1a827c',
        'sea-green-dark': '#0d403d',
        'sea-fluorescent': '#97fffa',
      },
      textColor: {
        'neon': '#E1F5FF',
      },
      fontFamily: {
        'andes': ['andes'],
        'market-deoc': ['market-deco'],
      },
      backgroundColor: {
        'default-white': '#FAFAFA',
        'sea-blue-dark': '#136087',
        'sea-green': '#1a827c',
        'sea-green-dark': '#0d403d',
      }
    },
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
        transform: ['active', 'hover', 'focus'],
    }
  },
  plugins: [],
}
export default config
