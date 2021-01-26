/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss,
  ],
};
