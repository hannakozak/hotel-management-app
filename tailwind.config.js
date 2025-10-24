/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#0a6460',
				secondary: '#11AAA2',
				textDefault: '#333333',
			},
			fontFamily: {
				heading: ['Georgia', 'ui-serif', 'serif'],
				body: ['Poppins', 'ui-sans-serif', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
