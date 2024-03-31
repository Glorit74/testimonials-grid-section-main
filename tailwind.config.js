/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors: {
      violet: "hsl(263, 55%, 52%)",
      grayishBlue: "hsl(217, 19%, 35%)",
      blackishBlue: "hsl(219, 29%, 14%)",
      White: "hsl(0, 0%, 100%)",
      gray: "hsl(0, 0%, 81%)",
      blue: "hsl(210, 46%, 95%)",
    },
	fontFamily : {
		serif: ['Barlow', serif]
	},
    extend: {},
  },
  plugins: [],
};
