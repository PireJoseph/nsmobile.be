/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1BA39C',
					light: '#1B9E98',
					dark: '#1F303D',
				},
				secondary: {
					DEFAULT: '#1E454E',
					light: '#1E454E',
					dark: '#1E454E',
				},
				background: '#F6F6F6',
			},
			width: {
				104: '26rem',
				112: '28rem',
				128: '32rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
};
