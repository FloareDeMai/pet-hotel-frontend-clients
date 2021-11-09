module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Raleway', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ["responsive", "hover", "focus", "group-hover"],
      padding: ["responsive", "hover", "focus", "group-hover"],
      a: ["hover"],
    },
  },
  plugins: [],
};
