// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'linear-gradient': 'linear-gradient(to right, #FD746C, #2C3E50)',
      }
    }
  },
  plugins: [],
}
