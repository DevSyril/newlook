import type { Config } from "tailwindcss";

module.exports = {
    content: [
    "./src./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "var(--font-nunito)",
		secondary: ["var(--font-cairo-one)", "sans-serif"],
	},
  	extend: {
  		colors: {
  			primary: 'tomato',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e187'
			}
  		},
  	},
  },
  plugins: [require("tailwindcss-animate")], 
};
