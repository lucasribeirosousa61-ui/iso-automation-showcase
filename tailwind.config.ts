import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// ISO-Automação Brand Colors
				'iso-red': {
					DEFAULT: 'hsl(var(--iso-red))',
					hover: 'hsl(var(--iso-red-hover))',
				},
				'iso-dark': 'hsl(var(--iso-dark))',
				'iso-gray': 'hsl(var(--iso-gray))',
				'iso-light-gray': 'hsl(var(--iso-light-gray))',
				'iso-white': 'hsl(var(--iso-white))',
				
				// Semantic Colors
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				DEFAULT: 'var(--radius)',
				md: 'var(--radius)',
				sm: 'var(--radius-sm)',
			},
			boxShadow: {
				card: 'var(--shadow-card)',
				hover: 'var(--shadow-hover)',
			},
			backgroundImage: {
				'hero-gradient': 'var(--gradient-hero)',
				'card-gradient': 'var(--gradient-card)',
			},
			transitionProperty: {
				DEFAULT: 'var(--transition)',
				fast: 'var(--transition-fast)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
