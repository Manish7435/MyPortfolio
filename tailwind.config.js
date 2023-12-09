/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      strokeWidth: {
        '10': '10px',
      },
      boxShadow: {
      '3xl': '6px 6px 10px -1px rgba(255, 255, 255, 0.15), -6px -6px 10px -1px rgba(0, 0, 0, 0.7)',
      // 'inner': 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)'
      'inner': 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(0, 0, 0, 0.7), -0.5px -0.5px 0px rgba(0, 0, 0, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05), 0px 0px 20px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg')",
      },
    },
  },
  plugins: [],
}