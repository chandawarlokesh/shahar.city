/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        500: "500",
      },
      backgroundColor: {
        primary: "#644EFF",
      },
      borderColor: {
        shahar: "#DCDCDC",
      },
      color: {
        shahar: "#DCDCDC",
      },
    },
  },
  plugins: [],
};
