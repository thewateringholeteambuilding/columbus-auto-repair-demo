/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iron:          'hsl(var(--iron) / <alpha-value>)',
        steel:         'hsl(var(--steel) / <alpha-value>)',
        smoke:         'hsl(var(--smoke) / <alpha-value>)',
        brass:         'hsl(var(--accent) / <alpha-value>)',
        'brass-light': 'hsl(var(--accent-light) / <alpha-value>)',
        muted:         'hsl(var(--muted) / <alpha-value>)',
        border:        'hsl(var(--border) / <alpha-value>)',
        card:          'hsl(var(--card) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
