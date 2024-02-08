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
                'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'rain':'#A1C6CC',
				'neon': '#E1F5FF',
				'sea-blue-dark': '#136087',
                'sea-blue-darker': '#07202C',
                'sea-blue-gray': '#777d81',
                'soft-white': '#E6E6E6',
				'default-white': '#FAFAFA',
				'sea-green-dark': '#0d403d',
				'sea-green': '#1a827c',
                'gold': '#E5B80B',
                'gold-desaturated': '#b19d62',
                'gold-gray': '#938c76',
                'aspect-blue': '#00e8ff', //'#00cfff',
                'aspect-blue-darker': '#007580',
                'aspect-red': '#ff0025', // '#ff0025',
                'aspect-red-darker': '#800013',
                'aspect-yellow': '#ffa300', //'#ffaf00',
                'aspect-yellow-darker': '#805100',
                'aspect-green': '#1cff00', // '#7aff00',
                'aspect-green-darker': '#0f8000',
                'mana-cost': '#83f0ff',
                'flair-cost': '#fc6d65'
			},
			fontFamily: {
				'andes': ['andes'],
				'market-deco': ['market-deco'],
                'century-gothic': ['century-gothic'],
			},
            transitionProperty: {
                'height': 'height',
                'width': 'width',
            },
            transitionDuration: {
                '400': '400ms',
                '800': '800ms',
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
