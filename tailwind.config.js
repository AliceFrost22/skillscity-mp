{import('tailwindcss').Config}

{import('https://fonts.googleapis.com/css2?family=Righteous&display=swap')};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatica: ["Amatic SC", "cursive"],
        inter: ["Inter", "sans-serif"],
        header:["Righteous","cursive"]
      }
    },
  },
}