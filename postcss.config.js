module.exports = {
  plugins: [
    require('postcss-import'), // https://github.com/postcss/postcss-import
    require('postcss-mixins'), // https://github.com/postcss/postcss-mixins
    require('postcss-nested'), // https://github.com/postcss/postcss-nested
    require('postcss-simple-vars'), // https://github.com/postcss/postcss-simple-vars
    require('postcss-color-function'), // https://github.com/postcss/postcss-color-function
    require('postcss-preset-env')({
      // https://github.com/csstools/postcss-preset-env
      autoprefixer: { grid: 'autoplace' },
      stage: 0, // includes all new features of CSS
    }),
  ],
};
