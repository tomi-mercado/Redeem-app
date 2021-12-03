module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#0AD4FA'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};