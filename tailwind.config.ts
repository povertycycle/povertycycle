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
			colors: {
				'rain':'#A1C6CC',
				'neon': '#E1F5FF',
				'sea-blue-dark': '#136087',
                'soft-white': '#E6E6E6',
				'default-white': '#FAFAFA',
				'sea-green-dark': '#0d403d',
				'sea-green': '#1a827c',
                'gold': '#E5B80B',
                'aspect-green': '#50C878',
                'aspect-green-dark': '#317a48',
                'aspect-blue': '#0096FF',
                'aspect-blue-dark': '#0068b3',
                'aspect-red': '#EE4B2B',
                'aspect-red-dark': '#a1311d',
                'aspect-yellow': '#FFEA00',
                'aspect-yellow-dark': '#b3a400',
			},
			fontFamily: {
				'andes': ['andes'],
				'market-deco': ['market-deco'],
                'peake': ['peake'],
                'century-gothic': ['century-gothic'],
			},
            transitionProperty: {
                'height': 'height',
                'width': 'width'
            },
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
