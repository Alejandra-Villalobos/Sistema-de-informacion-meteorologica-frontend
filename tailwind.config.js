module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "clear-sky": "url('/src/assets/clear-sky.jpg')",
        "soft-rain" : "url('/src/assets/soft-rain.jpg')",
        "rain"  : "url('/src/assets/rain.jpg')",
        "humid": "url('/src/assets/humid.png')",
        "dry": "url('/src/assets/dry.jpg')",
      },
      colors: {
        "main-blue": "#447EEC",
        "temp-blue": "#28E7FC",
        "temp-green": "#4AFC2B",
        "temp-yellow": "#FBFF29",
        "temp-red": "#F7280C",
      },
    },
  },
  plugins: [],
};
