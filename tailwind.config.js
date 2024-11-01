/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},

//   },
//   plugins: [],
// }


// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [],
};