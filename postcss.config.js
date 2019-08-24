const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './public/index.html'
    ],
    css: ['./src/style/tailwind.css'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelistPatterns: [/^bg-red-/,/^bg-gray-/,/^bg-blue-/,/^mt-/,/^ml-/]
  })
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
  };