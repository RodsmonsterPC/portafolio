/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        description: "43.75rem",
        card: "400px",
        title: "500px",
      },
      height: {
        imgPort: "11.6rem",
      },
    },
  },
  plugins: [],
};
