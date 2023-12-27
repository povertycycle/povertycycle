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
				'default-white': '#FAFAFA',
				'sea-green-dark': '#0d403d',
				'sea-green': '#1a827c',
			},
			fontFamily: {
				'andes': ['andes'],
				'market-deoc': ['market-deco'],
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
