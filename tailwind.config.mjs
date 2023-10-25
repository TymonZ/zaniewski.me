/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'body': ['Rubik', 'sans-serif'],
				'mono': ['Roboto Mono', 'monospace'],
			},
			colors: {
				'basegray': '#0a0a0a',
				'lightgray': '#dcdcdc',
			},
			backgroundImage: {
				'noise': "url('/noise.gif')"
			},
		},
	},
	plugins: [],
}
