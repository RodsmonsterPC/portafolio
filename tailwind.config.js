/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "rgb(230,230,230)",
        background:
          "linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(218,218,218,1) 57%)",
      },
      spacing: {
        description: "43.75rem",
        card: "400px",
        title: "500px",
      },
    },
  },
  plugins: [],
};
