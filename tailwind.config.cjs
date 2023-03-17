/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    

    extend: {colors: {
      "dark-blue": "#5d5f79",
      "off-white": "#fffdfa",
      orange: "hsl(35, 77%, 62%)",
      red: "hsl(5, 85%, 63%)",
      "gray-blue": "hsl(233, 8%, 79%)",
      "darkest-blue": "hsl(240, 100%, 5%)",
    }},
  },
  plugins: [],
};
