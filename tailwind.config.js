module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prophet-orange": "#FF9900",
        "prophet-blue": "#3498DB",
        "prophet-green": "#2ECC71",
      },
      borderRadius: {
        "md": "8px",
        "lg": "12px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
}