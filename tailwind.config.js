/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 30px rgb(34 197 94)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg')",
      },
    },
  },
  plugins: [],
}
