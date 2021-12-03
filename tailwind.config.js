module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#0AD4FA',
        },
      },
      boxShadow: {
        md: '2px 2px 4px 0 rgba(0,0,0,0.10);',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
