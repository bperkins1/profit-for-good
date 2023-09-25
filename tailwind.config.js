/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'texture': "url('../../public/texture.jpg')",
        'trees': "url('../../public/trees.jpg')",
        'water': "url('../../public/water.jpg')",
      },
      colors: {
        'forest': '#373929',
        'olive': '#696636',
        'slate': '#949F94',
        'gray': '#707070',
        'orange': '#BA6027',
        'cream': '#F3F1EB',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ],
}

// using filepath as if it is in globals.css file.