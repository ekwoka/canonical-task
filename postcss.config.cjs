/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./dist/index.html', './dist/render.js'],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
